import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Sparkles, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButton {
  text: string;
  href: string;
  primary?: boolean;
}

interface SyntheticHeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: CTAButton[];
  showEmailCapture?: boolean;
  emailPlaceholder?: string;
  emailButtonText?: string;
  heroImage?: string;
  onEmailSubmit?: (email: string) => void;
}

// Floating 3D Element Component (Lightweight CSS-based)
const Floating3DElement = ({ delay = 0, className }: { delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable mouse tracking on mobile
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / 20);
      mouseY.set((e.clientY - centerY) / 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  const rotateX = useSpring(useTransform(mouseY, [-50, 50], isMobile ? [0, 0] : [10, -10]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mouseX, [-50, 50], isMobile ? [0, 0] : [-10, 10]), {
    stiffness: 150,
    damping: 15,
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl",
        "bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10",
        "backdrop-blur-xl border border-white/20",
        "shadow-[0_8px_32px_rgba(117,92,33,0.2)]",
        "max-w-[calc(100vw-2rem)]",
        className
      )}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      animate={{
        y: [0, -20, 0],
        rotateZ: [0, 5, -5, 0],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl" />
    </motion.div>
  );
};

// Glassmorphism Card Component
const GlassCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "relative backdrop-blur-xl bg-white/10 dark:bg-black/20",
        "border border-white/20 dark:border-white/10",
        "rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
        "before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-gradient-to-br before:from-white/20 before:to-transparent",
        "before:opacity-50 before:pointer-events-none",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const SyntheticHero = ({
  title,
  description,
  badgeText,
  badgeLabel,
  ctaButtons,
  showEmailCapture = false,
  emailPlaceholder = "Enter your email",
  emailButtonText = "Get Started",
  heroImage,
  onEmailSubmit,
}: SyntheticHeroProps) => {
  const [email, setEmail] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms - reduced on mobile for performance
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "20%"] : ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 0.95] : [1, 0.8]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const { error } = await supabase
          .from('email_signups')
          .insert({ email, source: 'hero' });
        
        if (error) throw error;
        
        if (onEmailSubmit) {
          onEmailSubmit(email);
        }
        toast.success("You're on the list! We'll be in touch soon.", {
          description: "Get ready for your endless closet experience.",
        });
        setEmail("");
      } catch (error) {
        toast.error("Oops! Something went wrong.", {
          description: "Please try again later.",
        });
      }
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 z-0">
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(255, 255, 255)"
      gradientBackgroundEnd="rgb(250, 245, 235)"
      firstColor="206, 164, 66"
      secondColor="255, 255, 255"
      thirdColor="230, 200, 130"
      fourthColor="206, 164, 66"
      fifthColor="117, 92, 33"
      pointerColor="206, 164, 66"
      size="80%"
      blendingValue="soft-light"
          containerClassName="!h-full"
          className="!h-full"
        />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <Floating3DElement delay={0} className="top-10 left-4 md:left-10 hidden md:block" />
        <Floating3DElement delay={1} className="top-1/4 right-4 lg:right-20 hidden lg:block" />
        <Floating3DElement delay={2} className="bottom-20 left-4 xl:left-1/4 hidden xl:block" />
        <Floating3DElement delay={1.5} className="bottom-10 right-4 md:right-10 hidden md:block" />
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 pt-20 sm:pt-24 md:pt-28 lg:pt-32"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center max-w-7xl mx-auto"
        >
          {/* Content Column */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 text-center lg:text-left relative z-30"
          >
            {/* Badge */}
            {badgeText && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <GlassCard delay={0.2}>
                  <Badge
                    variant="secondary"
                    className="inline-flex gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30"
                  >
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                {badgeLabel && <span className="font-medium">{badgeLabel}:</span>}
                {badgeText}
              </Badge>
                </GlassCard>
              </motion.div>
            )}

            {/* Title with 3D Effect */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-headline leading-[1.1] tracking-tight"
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[1.75rem] text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
                {description}
            </motion.p>

            {/* Email Capture or CTA Buttons */}
            <motion.div variants={itemVariants} className="w-full">
            {showEmailCapture ? (
                <GlassCard delay={0.4} className="p-4 sm:p-5 md:p-6">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5"
                    aria-label="Email signup form"
                  >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
                  <label htmlFor="hero-email" className="sr-only">
                    Email address
                  </label>
                  <Input
                    id="hero-email"
                    type="email"
                    placeholder={emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-required="true"
                    aria-label="Enter your email address"
                        className="flex-1 min-h-[52px] h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg bg-white/90 dark:bg-black/20 backdrop-blur-sm border-white/30 focus:border-primary/50 text-headline placeholder:text-muted-foreground px-4 sm:px-5 md:px-6 shadow-lg focus:shadow-xl transition-all"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    aria-label="Submit email to join early bird list"
                        className={cn(
                          "min-h-[52px] h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg font-semibold",
                          "bg-gradient-to-r from-primary via-primary to-primary-hover",
                          "text-primary-foreground shadow-[0_4px_20px_rgba(117,92,33,0.4)]",
                          "hover:shadow-[0_6px_30px_rgba(117,92,33,0.6)]",
                          "hover:scale-105 active:scale-95 transition-all duration-300",
                          "relative overflow-hidden group w-full sm:w-auto"
                        )}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <span className="relative z-10 flex items-center gap-2">
                    {emailButtonText}
                          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                        </span>
                  </Button>
                </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-xs sm:text-sm text-muted-foreground text-center lg:text-left"
                    >
                      <Zap className="inline h-3 w-3 sm:h-4 sm:w-4 mr-1 text-primary" />
                      Join thousands of early adopters
                    </motion.p>
              </form>
                </GlassCard>
            ) : (
              ctaButtons && (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  {ctaButtons.map((button, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                    <Button
                      size="lg"
                      variant={button.primary ? "default" : "outline"}
                      asChild
                          className={cn(
                        button.primary
                              ? "bg-gradient-to-r from-primary via-primary to-primary-hover text-primary-foreground shadow-button hover:shadow-lg hover:scale-105 transition-all w-full sm:w-auto"
                              : "w-full sm:w-auto border-2",
                            "min-h-[52px] px-6 sm:px-8 font-semibold"
                          )}
                    >
                      <a href={button.href}>{button.text}</a>
                    </Button>
                      </motion.div>
                  ))}
                </div>
              )
            )}
            </motion.div>
          </motion.div>

          {/* Image Column with 3D Effect */}
          {heroImage && (
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="w-full lg:w-1/2 relative h-[350px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] 2xl:h-[750px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* 3D Container */}
              <motion.div
                className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-headline/30 via-transparent to-transparent z-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 z-10" />

                {/* Image with Parallax */}
                <motion.img
                src={heroImage}
                alt="Trendy fashion outfits available for rent on Popclozet - stylish clothing delivered in 60 minutes"
                  className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                width={800}
                height={700}
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                  style={{
                    transform: "translateZ(50px)",
                  }}
                />

                {/* 3D Shadow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl -z-10 opacity-50" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:-bottom-4 md:-right-4 lg:-bottom-6 lg:-right-6 z-30"
              >
                <GlassCard delay={0.8} className="p-3 sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-semibold text-headline">
                      60 Min Delivery
                    </span>
            </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SyntheticHero;
