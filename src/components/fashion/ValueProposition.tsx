import { motion } from 'framer-motion';
import { Sparkles, Zap, Heart, Leaf } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Curated Styles',
    description: 'Handpicked by fashion experts. Every piece tells a story.',
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    icon: Zap,
    title: '60-Min Delivery',
    description: 'Lightning-fast delivery. Your style, on demand.',
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    icon: Heart,
    title: 'Affordable Luxury',
    description: 'Premium fashion at 10-15% of retail price. No compromises.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Leaf,
    title: 'Conscious Fashion',
    description: 'Sustainable choices. Reduce waste, maximize style.',
    gradient: 'from-cyan-500 to-green-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function ValueProposition() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#050816] via-[#0a0f2e] to-[#050816] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The{' '}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              PopClozet
            </span>{' '}
            Difference
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Fashion rental reimagined for the modern trendsetter
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                <motion.div
                  className="relative h-full bg-[#0a0f2e] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Icon container with gradient border */}
                  <motion.div
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-6`}
                    whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full h-full bg-[#0a0f2e] rounded-2xl flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Glow effect behind icon */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10`}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                  {/* Decorative element */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}
                  />

                  {/* Card glow effect */}
                  <motion.div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 -z-10 transition-opacity duration-300`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-gray-400">Happy Customers</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-400">Fashion Items</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                60min
              </div>
              <div className="text-gray-400">Delivery Time</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent mb-2">
                4.9★
              </div>
              <div className="text-gray-400">Average Rating</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
