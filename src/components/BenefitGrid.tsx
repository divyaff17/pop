import { Sparkles, Clock, Leaf, Shirt } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { use3DTilt } from "@/hooks/use-3d-tilt";
import { useState } from "react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Sparkles,
    title: "Event-Ready 'Pop Looks'",
    description:
      "Got a date, party, or fest? Rent a complete, stylist-approved outfit with one tap. Your 'go-to' look for any event.",
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    iconGradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shirt,
    title: "The 'Mix & Match' Closet",
    description:
      "Just need a new top? Browse thousands of individual pieces to complete the look you already have. Total creative freedom.",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    iconGradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "Rent It ASAP",
    description:
      "Your plans are spontaneous, so we are too. Your outfit arrives at your door—fresh, clean, and ready to wear—in 60 minutes.",
    gradient: "from-amber-500/20 via-orange-500/20 to-yellow-500/20",
    iconGradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Leaf,
    title: "Smart, Simple, Sustainable",
    description:
      "Look amazing for 10-15% of the retail price. When you're done, just use the free return bag. We handle all the dry cleaning.",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconGradient: "from-green-500 to-emerald-500",
  },
];

// Individual Benefit Card Component
const BenefitCard = ({ 
  benefit, 
  index, 
  isIntersecting, 
  hoveredIndex, 
  setHoveredIndex 
}: { 
  benefit: typeof benefits[0]; 
  index: number; 
  isIntersecting: boolean; 
  hoveredIndex: number | null; 
  setHoveredIndex: (index: number | null) => void;
}) => {
  const Icon = benefit.icon;
  const cardRef = use3DTilt<HTMLElement>({ max: 8, scale: 1.03, speed: 300 });
  const isHovered = hoveredIndex === index;
  const isVisible = isIntersecting;

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={cn(
        "group relative text-center space-y-3 sm:space-y-4 md:space-y-5",
        "p-4 sm:p-5 md:p-6 lg:p-8",
        "rounded-xl sm:rounded-2xl md:rounded-3xl",
        "border border-border/50",
        "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2",
        "benefit-card",
        "transform-gpu",
        isVisible && "animate-reveal-card"
      )}
      style={{ 
        animationDelay: `${index * 150}ms`,
        transformStyle: "preserve-3d",
      }}
      role="listitem"
      tabIndex={0}
    >
      {/* Glassmorphism Background */}
      <div className={cn(
        "absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-3xl",
        "bg-gradient-to-br from-card/80 via-card/90 to-card/80",
        "backdrop-blur-xl",
        "border border-white/10",
        "transition-all duration-500",
        isHovered && "bg-gradient-to-br from-card/90 via-card/95 to-card/90 border-white/20"
      )} />

      {/* Gradient Overlay */}
      <div className={cn(
        "absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-3xl",
        "bg-gradient-to-br opacity-0 group-hover:opacity-100",
        benefit.gradient,
        "transition-opacity duration-500",
        "pointer-events-none"
      )} />

      {/* Layered Shadow Effect */}
      <div className={cn(
        "absolute -inset-0.5 rounded-xl sm:rounded-2xl md:rounded-3xl",
        "bg-gradient-to-br from-primary/20 via-transparent to-secondary/20",
        "opacity-0 group-hover:opacity-100",
        "blur-xl",
        "transition-opacity duration-500",
        "pointer-events-none",
        "-z-10"
      )} />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon Container with 3D Effect */}
        <div className={cn(
          "inline-flex items-center justify-center",
          "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20",
          "rounded-lg sm:rounded-xl md:rounded-2xl",
          "relative",
          "transition-all duration-500",
          "group-hover:scale-110 group-hover:rotate-6",
          "icon-container-3d"
        )}>
          {/* Icon Background with Gradient */}
          <div className={cn(
            "absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl",
            "bg-gradient-to-br",
            benefit.iconGradient,
            "opacity-20 group-hover:opacity-30",
            "transition-opacity duration-500",
            "blur-sm"
          )} />
          <div className={cn(
            "absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl",
            "bg-primary/15 group-hover:bg-primary/25",
            "backdrop-blur-sm",
            "transition-all duration-500"
          )} />
          <Icon className={cn(
            "relative z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10",
            "text-primary",
            "transition-all duration-500",
            "group-hover:scale-110",
            "drop-shadow-lg"
          )} aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className={cn(
          "text-base sm:text-lg md:text-xl lg:text-xl font-bold",
          "text-headline",
          "mt-4 sm:mt-5",
          "transition-all duration-300",
          "group-hover:text-primary",
          "relative z-10"
        )}>
          {benefit.title}
        </h3>

        {/* Description */}
        <p className={cn(
          "text-sm sm:text-base text-muted-foreground",
          "leading-relaxed",
          "transition-all duration-300",
          "group-hover:text-foreground/90",
          "relative z-10"
        )}>
          {benefit.description}
        </p>

        {/* Decorative Bottom Accent */}
        <div className={cn(
          "absolute bottom-0 left-1/2 -translate-x-1/2",
          "w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent",
          "group-hover:w-1/3",
          "transition-all duration-500",
          "rounded-full"
        )} />
      </div>

      {/* Shine Effect on Hover */}
      <div className={cn(
        "absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-3xl",
        "bg-gradient-to-r from-transparent via-white/10 to-transparent",
        "opacity-0 group-hover:opacity-100",
        "translate-x-[-200%] group-hover:translate-x-[200%]",
        "transition-all duration-1000 ease-in-out",
        "pointer-events-none"
      )} />
    </article>
  );
};

const BenefitGrid = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      ref={ref}
      id="benefits" 
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/30 overflow-hidden"
      aria-labelledby="benefits-heading"
    >
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-1" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-2" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-3" />
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float-4" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={cn(
          "transition-all duration-1000 ease-out",
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 
            id="benefits-heading" 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-headline text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 px-4"
          >
            Your Endless Closet, Explained.
          </h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 max-w-2xl mx-auto">
            Discover how Popclozet transforms your fashion experience with style, speed, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8" role="list">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              benefit={benefit}
              index={index}
              isIntersecting={isIntersecting}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitGrid;
