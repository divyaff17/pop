import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { use3DTilt } from "@/hooks/use-3d-tilt";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export interface iTestimonial {
  description: string;
  profileImage: string;
  name: string;
  designation: string;
  rating?: number;
  headline?: string;
}

interface TestimonialCardProps {
  testimonial: iTestimonial;
  index: number;
  backgroundImage?: string;
  isActive?: boolean;
}

export const TestimonialCard = ({
  testimonial,
  index,
  backgroundImage,
  isActive = false,
}: TestimonialCardProps) => {
  const rating = testimonial.rating || 5;
  const cardRef = use3DTilt<HTMLDivElement>({ max: 8, scale: 1.03, speed: 400 });
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  // Gradient colors based on index
  const gradients = [
    "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    "from-amber-500/20 via-orange-500/20 to-yellow-500/20",
    "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
  ];

  const borderGradients = [
    "from-purple-500/40 via-pink-500/40 to-rose-500/40",
    "from-blue-500/40 via-cyan-500/40 to-teal-500/40",
    "from-amber-500/40 via-orange-500/40 to-yellow-500/40",
    "from-green-500/40 via-emerald-500/40 to-teal-500/40",
    "from-indigo-500/40 via-purple-500/40 to-pink-500/40",
  ];

  const gradient = gradients[index % gradients.length];
  const borderGradient = borderGradients[index % borderGradients.length];

  return (
    <motion.article 
      ref={ref}
      className={cn(
        "w-full px-2 sm:px-3 md:px-4",
        "testimonial-card-wrapper"
      )}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isIntersecting ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <motion.div
        ref={cardRef}
        className={cn(
          "group relative",
          "bg-gradient-to-br from-card/90 via-card/95 to-card/90",
          "backdrop-blur-xl",
          "rounded-2xl sm:rounded-3xl",
          "p-5 sm:p-6 md:p-8 lg:p-10",
          "border border-border/50",
          "shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
          "hover:shadow-[0_12px_50px_rgba(0,0,0,0.15),0_8px_30px_rgba(117,92,33,0.25)]",
          "transition-all duration-500",
          "transform-gpu",
          "testimonial-card-3d",
          isActive && "ring-2 ring-primary/50 ring-offset-2"
        )}
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ 
          y: -8,
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        {/* Animated Background Gradient Overlay */}
        <motion.div 
          className={cn(
            "absolute inset-0 rounded-2xl sm:rounded-3xl",
            "bg-gradient-to-br",
            gradient,
            "pointer-events-none"
          )}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Animated Border Gradient with Glow */}
        <motion.div 
          className={cn(
            "absolute -inset-1 rounded-2xl sm:rounded-3xl",
            "bg-gradient-to-br",
            borderGradient,
            "blur-md",
            "pointer-events-none",
            "-z-10"
          )}
          initial={{ opacity: 0, scale: 0.95 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />

        {/* Floating Sparkles Effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${10 + i * 12}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 0.8, 0.4],
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

        {/* Decorative Quote Icon with Animation */}
        <motion.div 
          className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-5"
          whileHover={{ opacity: 0.15, rotate: 180, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Quote className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-primary" />
        </motion.div>

        {/* Background Image (if provided) */}
        {backgroundImage && (
          <motion.div
            className="absolute inset-0 opacity-[0.02] rounded-2xl sm:rounded-3xl bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            whileHover={{ opacity: 0.06 }}
            transition={{ duration: 0.5 }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 space-y-4 sm:space-y-5 md:space-y-6">
          {/* Rating with Staggered Animation */}
          <motion.div 
            className="flex gap-1.5 sm:gap-2" 
            role="img" 
            aria-label={`Rating: ${rating} out of 5 stars`}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0, rotate: -180 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0,
                    transition: {
                      delay: index * 0.15 + i * 0.1,
                      duration: 0.5,
                      ease: "backOut"
                    }
                  }
                }}
              >
                <Star
                  className={cn(
                    "w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300",
                    "group-hover:scale-125",
                    i < rating
                      ? "fill-primary text-primary drop-shadow-lg"
                      : "fill-muted/30 text-muted/30"
                  )}
                  style={{ 
                    filter: i < rating ? "drop-shadow(0 2px 12px rgba(117, 92, 33, 0.5))" : "none"
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Headline with Fade In */}
          {testimonial.headline && (
            <motion.h3 
              className={cn(
                "text-lg sm:text-xl md:text-2xl font-bold",
                "text-headline",
                "transition-all duration-300",
                "group-hover:text-primary",
                "leading-tight"
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
            >
              {testimonial.headline}
            </motion.h3>
          )}

          {/* Description with Quote Styling and Animation */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
          >
            <p className={cn(
              "text-sm sm:text-base md:text-lg",
              "text-muted-foreground",
              "leading-relaxed sm:leading-loose",
              "transition-all duration-300",
              "group-hover:text-foreground/90",
              "font-medium",
              "relative pl-4 sm:pl-6"
            )}>
              <motion.span 
                className="absolute left-0 top-0 text-2xl sm:text-3xl md:text-4xl text-primary/20 leading-none"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                "
              </motion.span>
              {testimonial.description}
              <motion.span 
                className="text-2xl sm:text-3xl md:text-4xl text-primary/20 leading-none"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                "
              </motion.span>
            </p>
          </motion.div>

          {/* Profile Section with Slide In */}
          <motion.div 
            className={cn(
              "pt-4 sm:pt-5 md:pt-6",
              "border-t border-border/50 group-hover:border-primary/30",
              "transition-colors duration-300",
              "flex items-center gap-3 sm:gap-4"
            )}
            initial={{ opacity: 0, x: 20 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
          >
            {/* Profile Image with Scale Animation */}
            <motion.div 
              className={cn(
                "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14",
                "rounded-full",
                "bg-gradient-to-br from-primary/20 to-secondary/20",
                "border-2 border-primary/20",
                "transition-all duration-300",
                "flex items-center justify-center",
                "overflow-hidden",
                "relative"
              )}
              whileHover={{ scale: 1.15, borderColor: "hsl(var(--primary))" }}
            >
              {/* Glowing Ring on Hover */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/50"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.3, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
              {testimonial.profileImage ? (
                <img
                  src={testimonial.profileImage}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                  {testimonial.name.charAt(0)}
                </span>
              )}
            </motion.div>
            <div className="flex-1">
              <motion.p 
                className={cn(
                  "text-sm sm:text-base md:text-lg",
                  "font-semibold sm:font-bold",
                  "text-foreground",
                  "transition-colors duration-300"
                )}
                whileHover={{ color: "hsl(var(--primary))" }}
              >
                {testimonial.name}
              </motion.p>
              <p className={cn(
                "text-xs sm:text-sm md:text-base",
                "text-muted-foreground",
                "transition-colors duration-300",
                "group-hover:text-foreground/80"
              )}>
                {testimonial.designation}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Animated Shine Effect */}
        <motion.div 
          className={cn(
            "absolute inset-0 rounded-2xl sm:rounded-3xl",
            "bg-gradient-to-r from-transparent via-white/20 to-transparent",
            "pointer-events-none"
          )}
          initial={{ x: "-200%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "linear"
          }}
        />

        {/* Corner Accent with Pulse */}
        <motion.div 
          className={cn(
            "absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24",
            "bg-gradient-to-br from-primary/10 to-transparent",
            "rounded-bl-full",
            "pointer-events-none"
          )}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.article>
  );
};

interface CarouselProps {
  items: React.ReactNode[];
  autoPlayInterval?: number;
  "aria-label"?: string;
}

export const Carousel = ({ items, autoPlayInterval = 5000, "aria-label": ariaLabel }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, items.length, autoPlayInterval, isAutoPlaying, isTransitioning]);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="relative w-full" role="region" aria-label={ariaLabel || "Testimonials carousel"}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Carousel Container with 3D Perspective */}
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
            className="w-full"
            role="list"
            aria-live="polite"
            aria-atomic="false"
          >
            <div className="w-full flex-shrink-0 px-2 sm:px-4" role="listitem">
              {items[currentIndex]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Navigation Buttons with Glow */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            disabled={isTransitioning}
            className={cn(
              "rounded-full",
              "min-w-[48px] min-h-[48px] w-12 h-12 sm:w-14 sm:h-14",
              "bg-background/90 backdrop-blur-md",
              "border-2 border-border/50",
              "hover:bg-primary hover:text-primary-foreground hover:border-primary",
              "transition-all duration-300",
              "shadow-lg hover:shadow-xl hover:shadow-primary/50",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              "carousel-button",
              "relative overflow-hidden"
            )}
            aria-label="Previous testimonial"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
          </Button>
        </motion.div>

        {/* Enhanced Dots with Animation and Glow */}
        <div className="flex gap-2 sm:gap-3" role="tablist" aria-label="Testimonial slides">
          {items.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={cn(
                "rounded-full transition-all duration-500",
                "min-w-[44px] min-h-[44px] flex items-center justify-center",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                "relative"
              )}
              aria-label={`Go to slide ${index + 1}`}
              role="tab"
              aria-selected={index === currentIndex}
              tabIndex={index === currentIndex ? 0 : -1}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentIndex ? (
                <>
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/50"
                    layoutId="activeDot"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                  <motion.span 
                    className="absolute inset-0 rounded-full bg-primary/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </>
              ) : (
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-border/50 hover:bg-primary/30 rounded-full transition-colors" />
              )}
            </motion.button>
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            disabled={isTransitioning}
            className={cn(
              "rounded-full",
              "min-w-[48px] min-h-[48px] w-12 h-12 sm:w-14 sm:h-14",
              "bg-background/90 backdrop-blur-md",
              "border-2 border-border/50",
              "hover:bg-primary hover:text-primary-foreground hover:border-primary",
              "transition-all duration-300",
              "shadow-lg hover:shadow-xl hover:shadow-primary/50",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              "carousel-button",
              "relative overflow-hidden"
            )}
            aria-label="Next testimonial"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
          </Button>
        </motion.div>
      </div>

      {/* Animated Progress Indicator with Glow */}
      <motion.div 
        className="mt-6 sm:mt-8 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="w-full max-w-xs h-1.5 bg-border/30 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-primary-hover to-primary rounded-full shadow-lg shadow-primary/50"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};
