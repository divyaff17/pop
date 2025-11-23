import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { useMagnetic } from "@/hooks/use-magnetic";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY, isScrolled } = useScroll();
  const magneticButtonRef = useMagnetic<HTMLButtonElement>({ strength: 0.4, threshold: 80 });
  const magneticLogoRef = useMagnetic<HTMLAnchorElement>({ strength: 0.3, threshold: 60 });

  const navLinks = [
    { label: "Benefits", href: "#benefits" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ];

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Calculate navbar height based on scroll
  const navbarHeight = isScrolled ? "h-14 md:h-16" : "h-16 md:h-20";
  const logoScale = isScrolled ? "scale-95" : "scale-100";
  const blurIntensity = isScrolled ? "backdrop-blur-xl" : "backdrop-blur-md";
  const bgOpacity = isScrolled ? "bg-background/98" : "bg-background/95";
  const shadowIntensity = isScrolled 
    ? "shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)]" 
    : "shadow-[0_4px_16px_rgba(0,0,0,0.08)]";

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        bgOpacity,
        blurIntensity,
        shadowIntensity,
        "border-b border-border/50",
        "nav-3d"
      )}
      role="navigation" 
      aria-label="Main navigation"
      style={{
        transform: `translateY(0)`,
        willChange: "transform, backdrop-filter, background-color",
      }}
    >
      {/* 3D Depth Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
        <div className={cn("flex items-center justify-between transition-all duration-500", navbarHeight)}>
          {/* Logo with 3D effect and magnetic */}
          <a 
            ref={magneticLogoRef}
            href="#top" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#top");
            }}
            className={cn(
              "relative bg-gradient-to-br from-primary via-primary to-primary-hover",
              "text-primary-foreground px-4 sm:px-5 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3",
              "rounded-full font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight",
              "min-w-[44px] min-h-[44px] flex items-center justify-center",
              "transition-all duration-300 ease-out",
              logoScale,
              "shadow-[0_4px_20px_rgba(117,92,33,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
              "hover:shadow-[0_6px_30px_rgba(117,92,33,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]",
              "hover:scale-105 active:scale-95",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              "logo-3d"
            )}
            aria-label="Popclozet - Return to top"
          >
            {/* Logo glow effect */}
            <span className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Popclozet</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8" role="menubar">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "relative text-foreground font-medium min-h-[44px] px-2 md:px-3 lg:px-4",
                    "text-sm md:text-base",
                    "transition-all duration-300 ease-out",
                    "group nav-link-3d",
                    isActive 
                      ? "text-primary scale-105" 
                      : "hover:text-primary hover:scale-105"
                  )}
                  aria-label={`Navigate to ${link.label} section`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="relative z-10 whitespace-nowrap">{link.label}</span>
                  {/* Underline animation */}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-hover",
                      "transition-all duration-300 ease-out",
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                    )}
                  />
                  {/* Hover glow */}
                  <span className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </button>
              );
            })}
            
            {/* CTA Button with magnetic effect */}
            <Button
              ref={magneticButtonRef}
              size="lg"
              className={cn(
                "relative bg-gradient-to-r from-primary via-primary to-primary-hover",
                "text-primary-foreground font-bold min-h-[44px] px-4 md:px-5 lg:px-6",
                "text-xs md:text-sm lg:text-base",
                "shadow-[0_4px_20px_rgba(117,92,33,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]",
                "hover:shadow-[0_6px_30px_rgba(117,92,33,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]",
                "transition-all duration-300 ease-out",
                "hover:scale-105 active:scale-95",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                "button-3d overflow-hidden whitespace-nowrap"
              )}
              onClick={() => scrollToSection("#cta")}
              aria-label="Navigate to sign up section"
            >
              {/* Button shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <span className="relative z-10">Unlock my closet</span>
            </Button>
          </div>

          {/* Mobile Menu Button with 3D effect */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center",
              "text-foreground transition-all duration-300",
              "rounded-lg",
              "hover:bg-primary/10 hover:text-primary",
              "active:scale-95",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              "mobile-menu-button"
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={cn(
                  "absolute inset-0 w-6 h-6 transition-all duration-300",
                  isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                )} 
              />
              <X 
                className={cn(
                  "absolute inset-0 w-6 h-6 transition-all duration-300",
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                )} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu with glassmorphism */}
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-out",
            "bg-background/80 backdrop-blur-xl",
            "rounded-b-2xl border-t border-border/50",
            "shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
            isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
          )}
          role="menu"
          aria-hidden={!isOpen}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "block w-full text-left px-4 py-3",
                    "text-foreground font-medium rounded-lg min-h-[44px]",
                    "transition-all duration-300",
                    "hover:bg-primary/10 hover:text-primary hover:translate-x-2",
                    "active:scale-95",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    isActive && "bg-primary/10 text-primary border-l-4 border-primary"
                  )}
                  role="menuitem"
                  aria-label={`Navigate to ${link.label} section`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="px-4 pt-2">
              <Button
                size="lg"
                className={cn(
                  "w-full bg-gradient-to-r from-primary via-primary to-primary-hover",
                  "text-primary-foreground font-bold min-h-[44px]",
                  "shadow-[0_4px_20px_rgba(117,92,33,0.4)]",
                  "hover:shadow-[0_6px_30px_rgba(117,92,33,0.5)]",
                  "transition-all duration-300",
                  "hover:scale-105 active:scale-95",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                )}
                onClick={() => scrollToSection("#cta")}
                aria-label="Navigate to sign up section"
              >
                Unlock my closet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
