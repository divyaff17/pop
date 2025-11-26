import { motion } from 'framer-motion';
import { Search, Truck, RotateCcw, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Browse & Select',
    description: 'Explore our curated collection and pick your perfect outfit',
    color: 'from-pink-500 to-purple-500',
    number: '01',
  },
  {
    icon: Truck,
    title: '60-Min Delivery',
    description: 'Get your fashion delivered to your doorstep in 60 minutes',
    color: 'from-purple-500 to-blue-500',
    number: '02',
  },
  {
    icon: CheckCircle2,
    title: 'Wear & Shine',
    description: 'Rock your outfit and make unforgettable memories',
    color: 'from-blue-500 to-cyan-500',
    number: '03',
  },
  {
    icon: RotateCcw,
    title: 'Easy Return',
    description: 'Return hassle-free. We handle cleaning and maintenance',
    color: 'from-cyan-500 to-green-500',
    number: '04',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#050816] via-[#0a0f2e] to-[#050816] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
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
              Simple Process
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            How{' '}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              PopClozet
            </span>{' '}
            Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Four simple steps to elevate your style game
          </p>
        </motion.div>

        {/* Steps - Desktop horizontal layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="hidden md:grid md:grid-cols-4 gap-8 relative"
        >
          {/* Connecting line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 opacity-30" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative group"
              >
                <motion.div
                  className="relative bg-[#0a0f2e] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Number badge */}
                  <div className="absolute -top-6 left-8">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-0.5 mb-6 mt-6`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full h-full bg-[#0a0f2e] rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-0 group-hover:opacity-20 -z-10 transition-opacity duration-300`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Steps - Mobile vertical layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="md:hidden space-y-8 relative"
        >
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-12 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 via-blue-500 to-cyan-500 opacity-30" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={index} variants={cardVariants} className="relative group">
                <div className="flex gap-6">
                  {/* Number badge */}
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 bg-[#0a0f2e] border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    {/* Icon */}
                    <motion.div
                      className={`inline-block w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} p-0.5 mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-full h-full bg-[#0a0f2e] rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </motion.div>

                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                    {/* Glow effect */}
                    <motion.div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-0 group-hover:opacity-20 -z-10 transition-opacity duration-300`}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
