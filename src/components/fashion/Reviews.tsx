import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Fashion Blogger',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    rating: 5,
    text: 'PopClozet is a game-changer! I can experiment with different styles without breaking the bank. The quality is amazing and delivery is super fast.',
  },
  {
    id: 2,
    name: 'Arjun Patel',
    role: 'College Student',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    rating: 5,
    text: 'Perfect for college events! Got a sick outfit delivered in 60 minutes. My friends were shocked when I told them I rented it.',
  },
  {
    id: 3,
    name: 'Neha Kapoor',
    role: 'Marketing Executive',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    rating: 5,
    text: 'Sustainable fashion at its best. I love that I can wear trendy clothes without contributing to waste. The return process is so easy!',
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
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function Reviews() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="reviews"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#050816] via-[#0a0f2e] to-[#050816] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
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
              Customer Reviews
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Community Says
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of fashion-forward individuals who trust PopClozet
          </p>
        </motion.div>

        {/* Reviews grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="relative h-full bg-[#0a0f2e] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Quote icon */}
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    rotate: hoveredIndex === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="w-6 h-6 text-white" />
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-300 leading-relaxed mb-6">"{review.text}"</p>

                {/* Profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <motion.img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-pink-500/50"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <div>
                    <div className="font-semibold text-white">{review.name}</div>
                    <div className="text-sm text-gray-400">{review.role}</div>
                  </div>
                </div>

                {/* Gradient accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                />

                {/* Card glow effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 -z-10 transition-opacity duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#0a0f2e] border border-white/10 rounded-full px-8 py-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-white font-semibold">4.9 out of 5</div>
            <div className="text-gray-400">from 2,547 reviews</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
