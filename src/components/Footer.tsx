import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, Mail, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { use3DTilt } from "@/hooks/use-3d-tilt";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#founder" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" }
];

const socials = [
  { icon: Instagram, href: "https://instagram.com/popclozet", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/popclozet", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com/popclozet", label: "Facebook" }
];

const floatingShapes = [
  { className: "left-4 top-2 w-14 h-14 bg-primary/20 blur-2xl", delay: 0 },
  { className: "right-0 top-10 w-24 h-14 bg-secondary/20 blur-3xl", delay: 1.2 },
  { className: "left-1/2 -bottom-6 w-24 h-24 bg-primary/20 blur-3xl", delay: 2.1 },
  { className: "left-1/3 top-1/2 w-12 h-12 bg-accent/20 blur-2xl", delay: 1.5 },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-transparent mt-16" role="contentinfo">
      {/* Floating shapes for futuristic effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        {floatingShapes.map((s, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${s.className}`}
            animate={{
              y: [0, 24, -24, 0], scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 12, delay: s.delay, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"
            }}
          />
        ))}
      </div>
      <motion.div
        className={cn(
          "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10",
          "flex flex-col md:flex-row md:items-start md:justify-evenly gap-y-12 md:gap-y-0 gap-x-12 lg:gap-x-20 xl:gap-x-28"
        )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.14, delayChildren: 0.15, duration: 0.9 } }
        }}
      >
        {/* Brand and About */}
        <motion.div className="flex-1 min-w-[225px] max-w-[350px]" variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
          <div className="footer-glass shadow-2xl rounded-2xl p-6 md:p-8 relative flex flex-col gap-3 items-start">
            <span className="font-extrabold text-2xl sm:text-3xl tracking-tight pb-1 gradient-text-hero">Popclozet</span>
            <span className="block text-base sm:text-lg text-muted-foreground font-medium">Your endless closet, delivered in 60 minutes. Premium, sustainable fashion at lightning speed.</span>
            <div className="mt-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/30 text-headline backdrop-blur-sm">© {new Date().getFullYear()} Popclozet</span>
            </div>
          </div>
        </motion.div>
        {/* Footer Links */}
        <motion.nav
          className="flex-1 min-w-[225px] max-w-[350px] flex flex-col gap-4"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
        >
          <span className="text-base font-semibold text-headline mb-1">Explore</span>
          <ul className="flex flex-col gap-2">
            {links.map((l, i) => (
              <motion.li
                key={l.href}
                whileHover={{ scale: 1.12, x: 6, color: "var(--tw-prose-links)" }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              >
                <a
                  href={l.href}
                  className="group transition-all duration-300 text-sm sm:text-base py-1 px-2 font-medium text-muted-foreground hover:text-primary relative overflow-hidden"
                >
                  <span className="inline-block group-hover:animate-pulse">{l.label}</span>
                  <motion.span
                    className="absolute left-0 -bottom-0.5 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary via-primary to-primary-hover rounded-full transition-all duration-500"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 0.5 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
        {/* Social/Contact */}
        <motion.div
          className="flex-1 min-w-[225px] max-w-[350px] flex flex-col items-center md:items-start gap-4"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
        >
          <span className="text-base font-semibold text-headline mb-1">Connect</span>
          <ul className="flex gap-2 sm:gap-4">
            {socials.map((social, i) => {
              const TiltWrapper = use3DTilt<HTMLAnchorElement>({ max: 12, scale: 1.12, speed: 350 });
              return (
                <motion.li
                  key={social.href}
                  whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
                >
                  <a
                    ref={TiltWrapper}
                    href={social.href}
                    target="_blank" rel="noopener noreferrer"
                    aria-label={social.label}
                    className={cn(
                      "group flex items-center justify-center rounded-full bg-muted/70 hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-300 shadow-lg hover:shadow-primary/40",
                      "size-12 sm:size-14 relative overflow-hidden"
                    )}
                  >
                    <motion.div
                      className="absolute inset-0 z-0"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.18, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      whileHover={{ scale: 1.15, rotate: [0, 10, -10, 0], color: "#f6c244" }}
                      transition={{ duration: 0.35 }}
                      className="relative z-10"
                    >
                      <social.icon className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 group-hover:text-primary-foreground text-primary" />
                    </motion.span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
        {/* Newsletter */}
        <motion.div
          className="flex-1 min-w-[225px] max-w-[350px] flex flex-col gap-4 items-center md:items-start"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
        >
          <span className="text-base font-semibold text-headline mb-1">Newsletter</span>
          <form
            className="relative w-full flex gap-0"
            onSubmit={(e) => { e.preventDefault(); /* handle signup / toast here */ }}
            autoComplete="off"
          >
            <motion.div
              whileFocus={{ boxShadow: "0 0 0 3px hsl(var(--primary) / 0.12)" }}
              className="relative w-full flex-1"
            >
              <Input
                name="newsletter"
                placeholder="Email address"
                autoComplete="off"
                required
                className="w-full bg-white/60 dark:bg-black/30 rounded-l-2xl border-none outline-none shadow-inner px-4 py-2 text-base focus:ring-2 focus:ring-primary focus:bg-white focus:text-headline transition-all glassmorphism placeholder:text-muted-foreground"
              />
              <motion.span
                className="absolute left-2.5 top-3 text-muted-foreground pointer-events-none transition-all duration-300"
                initial={{ opacity: 0.6, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
              >
                <Mail className="w-4 h-4" />
              </motion.span>
            </motion.div>
            <Button
              type="submit"
              size="lg"
              className="rounded-r-2xl px-5 bg-gradient-to-r from-primary via-secondary to-primary-hover text-primary-foreground font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary"
              aria-label="Subscribe"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </form>
          <span className="text-xs text-muted-foreground">Get 50% off your first rental, plus early access & style updates.</span>
        </motion.div>
      </motion.div>
      {/* Glass, blur and gradient background behind footer */}
      <div className="absolute inset-0 -z-10 rounded-t-3xl footer-glass pointer-events-none shadow-2xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary/30 blur-lg opacity-70" />
    </footer>
  );
}
