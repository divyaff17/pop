import { motion } from 'framer-motion';
import {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/ui/custom-faq-accordion";

const faqs = [
  {
    question: "How does the 60-minute delivery work?",
    answer:
      "Once you place your order, our team picks, quality-checks, and packs your outfit from our local micro-warehouse. We partner with reliable delivery services to ensure your outfit arrives within 60 minutes. You'll get real-time tracking so you know exactly when it's arriving!",
  },
  {
    question: "What about hygiene and cleaning?",
    answer:
      "Every single outfit is professionally dry-cleaned and sanitized after each rental. We use eco-friendly cleaning methods and seal each item in a protective bag. Your outfit will arrive fresh, clean, and ready to wear - it's like getting brand new clothes every time.",
  },
  {
    question: "What if I spill something or damage an item?",
    answer:
      "Life happens! Minor wear and tear is completely covered - that's normal use. For accidental stains or damage, we have a simple damage protection fee (much cheaper than buying the item). Just let us know what happened when you return it, and we'll take care of the rest.",
  },
  {
    question: "How long is a standard rental?",
    answer:
      "Our standard rental is 48 hours, giving you plenty of time to wear and enjoy your outfit. Need it longer? You can easily extend your rental through the app. We'll arrange a convenient pickup time when you're done - no washing required!",
  },
  {
    question: "Is this really more sustainable than buying?",
    answer:
      "Absolutely! By sharing clothes instead of everyone buying their own, we dramatically reduce fashion waste and overproduction. One outfit can be worn by dozens of people instead of sitting in a closet unused. Plus, our eco-friendly cleaning process and local delivery minimize environmental impact.",
  },
  {
    question: "What happens if my outfit doesn't fit?",
    answer:
      "We understand that fit is everything, and we've designed our service to solve this. Our goal is to ensure you look and feel amazing, with zero stress.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const FAQ = () => {
  return (
    <section 
      id="faq" 
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden" 
      aria-labelledby="faq-heading"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 
            id="faq-heading" 
            className="text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-bold text-headline mb-4 sm:mb-5 md:mb-6 px-4 leading-tight tracking-tight"
          >
          Got Questions? We've Got Answers.
        </h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 max-w-2xl mx-auto leading-relaxed"
            variants={headingVariants}
          >
          Everything you need to know about Popclozet
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <CustomAccordion 
            type="single" 
            collapsible 
            defaultValue="item-0" 
            className="space-y-4 sm:space-y-5 md:space-y-6" 
            aria-label="Frequently asked questions"
          >
          {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <CustomAccordionItem value={`item-${index}`}>
              <CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
              <CustomAccordionContent>{faq.answer}</CustomAccordionContent>
            </CustomAccordionItem>
              </motion.div>
          ))}
        </CustomAccordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
