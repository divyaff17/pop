import Navigation from "@/components/Navigation";
import SyntheticHero from "@/components/ui/synthetic-hero";
import CircularHowItWorks from "@/components/CircularHowItWorks";
import BenefitGrid from "@/components/BenefitGrid";
import { Carousel, TestimonialCard } from "@/components/ui/retro-testimonial";
import { iTestimonial } from "@/components/ui/retro-testimonial";
import FAQ from "@/components/FAQ";
import FounderNote from "@/components/FounderNote";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import heroImage from "@/assets/trendy-outfits.webp";
import { toast } from "sonner";
import { motion } from "framer-motion";

type TestimonialDetails = {
  [key: string]: iTestimonial & { id: string };
};

const testimonialData = {
  ids: [
    "testimonial-1",
    "testimonial-2",
    "testimonial-3",
    "testimonial-4",
    "testimonial-5",
  ],
  details: {
    "testimonial-1": {
      id: "testimonial-1",
      rating: 5,
      headline: "Perfect for my last-minute date!",
      description:
        "Popclozet is a game-changer! I had a last-minute date and got the perfect dress delivered before my cab even arrived. 10/10.",
      profileImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      name: "Riya S.",
      designation: "Verified Early Tester • Juhu",
    },
    "testimonial-2": {
      id: "testimonial-2",
      rating: 4.5,
      headline: "I'm obsessed... without going broke.",
      description:
        "I'm obsessed. I get to wear new, trendy clothes for my college fests every week without going broke or cluttering my wardrobe.",
      profileImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      name: "Aman K.",
      designation: "Verified Early Tester • Bandra",
    },
    "testimonial-3": {
      id: "testimonial-3",
      rating: 5,
      headline: "Finally used my favorite jeans again.",
      description:
        "I just wanted a new top to go with jeans I already own. Rented a super trendy one from the 'Mix & Match' closet. It was so easy and saved me from buying another thing I'd barely wear.",
      profileImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      name: "Pooja G.",
      designation: "Verified Early Tester • Andheri",
    },
    "testimonial-4": {
      id: "testimonial-4",
      rating: 4,
      headline: "The return process is so simple.",
      description:
        "Used Popclozet for a friend's birthday brunch. Got a really stylish shirt. The best part? The return was just a simple pickup. No washing, no hassle. Feels much smarter than buying.",
      profileImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "Karan V.",
      designation: "Verified Early Tester • Powai",
    },
    "testimonial-5": {
      id: "testimonial-5",
      rating: 4.5,
      headline: "Was skeptical, but I'm converted.",
      description:
        "I was a bit skeptical about renting, but I'm converted. The outfit arrived sealed in a bag, was perfectly clean, and felt brand new. Really impressed with the quality.",
      profileImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      name: "Sneha M.",
      designation: "Verified Early Tester • Lower Parel",
    },
  },
};

const Index = () => {
  const cards = testimonialData.ids.map((cardId: string, index: number) => {
    const details = testimonialData.details as TestimonialDetails;
    return (
      <TestimonialCard
        key={cardId}
        testimonial={details[cardId]}
        index={index}
        isActive={false}
      />
    );
  });

  const handleEmailSubmit = (email: string) => {
    toast.success("Welcome to Popclozet! 🎉", {
      description: "You're on the early bird list. We'll be in touch soon!",
    });
    console.log("Email submitted:", email);
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden" id="top">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <SyntheticHero
        title="New Outfit Everyday, Delivered in 60 Minutes."
        description="Why own it when you can rent it? Get the perfect outfit for dates, parties, and trips from your endless closet—on demand, no commitment necessary."
        showEmailCapture={true}
        emailPlaceholder="Enter your email"
        emailButtonText="Unlock my closet"
        heroImage={heroImage}
        onEmailSubmit={handleEmailSubmit}
      />

      {/* Benefit Grid */}
      <BenefitGrid />

      {/* Testimonials */}
      <section 
        id="testimonials" 
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 via-background to-background overflow-hidden" 
        aria-labelledby="testimonials-heading"
      >
        {/* Animated Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 -left-20 sm:left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 -right-20 sm:right-0 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-secondary/5 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Additional floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-primary/10"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + i * 10}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 
              id="testimonials-heading" 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-headline text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 px-4"
            >
              Why Our Users Love Popclozet
            </h2>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Real stories from our early testers
            </motion.p>
          </motion.div>
          <Carousel items={cards} aria-label="Customer testimonials" />
        </div>
      </section>

      {/* How It Works - Circular Design */}
      <CircularHowItWorks />

      {/* FAQ */}
      <FAQ />

      {/* Founder's Note */}
      <FounderNote />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
