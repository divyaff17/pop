import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press', href: '#press' },
  ],
  support: [
    { label: 'Help Center', href: '#help' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Shipping Info', href: '#shipping' },
    { label: 'Returns', href: '#returns' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'Disclaimer', href: '#disclaimer' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/popclozet', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/popclozet', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/popclozet', label: 'Facebook' },
];

export function FashionFooter() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a0f2e] to-[#050816] border-t border-white/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 md:py-20">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
                PopClozet
              </h3>
              <p className="text-gray-400 mb-6 max-w-sm">
                Your endless closet, delivered in 60 minutes. Rent premium fashion pieces and
                redefine your style without commitment.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 text-pink-500" />
                  <span className="text-sm">Mumbai, Maharashtra</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-purple-500" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-cyan-500" />
                  <span className="text-sm">hello@popclozet.com</span>
                </div>
              </div>
            </motion.div>

            {/* Company links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} PopClozet. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:border-transparent transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            {/* Made with love */}
            <motion.p
              className="text-gray-400 text-sm flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              Made with{' '}
              <motion.span
                className="text-pink-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ♥
              </motion.span>{' '}
              in India
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
