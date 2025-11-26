import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const products = [
  {
    id: 1,
    name: 'Neon Streetwear Hoodie',
    price: '₹799',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    badge: 'New',
    badgeColor: 'from-pink-500 to-purple-500',
  },
  {
    id: 2,
    name: 'Urban Tech Jacket',
    price: '₹1,299',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    badge: 'Trending',
    badgeColor: 'from-cyan-500 to-blue-500',
  },
  {
    id: 3,
    name: 'Premium Denim Set',
    price: '₹999',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
    badge: 'Under ₹999',
    badgeColor: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    name: 'Minimalist Cargo Pants',
    price: '₹699',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
    badge: 'Hot',
    badgeColor: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    name: 'Statement Bomber',
    price: '₹1,499',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    badge: 'Limited',
    badgeColor: 'from-purple-500 to-pink-500',
  },
  {
    id: 6,
    name: 'Cyber Tracksuit',
    price: '₹1,199',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80',
    badge: 'New',
    badgeColor: 'from-pink-500 to-purple-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-[#0a0f2e] border border-white/10"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <Badge className={cn('bg-gradient-to-r text-white border-0', product.badgeColor)}>
              {product.badge}
            </Badge>
          </div>

          {/* Like button */}
          <motion.button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center"
            onClick={() => setIsLiked(!isLiked)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart
              className={cn(
                'w-5 h-5 transition-all',
                isLiked ? 'fill-pink-500 text-pink-500' : 'text-white'
              )}
            />
          </motion.button>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-pink-900/50 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bottom-6 left-6 right-6">
              <motion.button
                className="w-full py-3 px-4 bg-white text-black font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <ShoppingBag className="w-5 h-5" />
                Rent Now
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Product info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {product.price}
            </span>
            <span className="text-sm text-gray-400">/48 hours</span>
          </div>
        </div>

        {/* Card glow effect */}
        <motion.div
          className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 -z-10 transition-opacity duration-300"
        />
      </motion.div>
    </motion.div>
  );
}

export function FeaturedCollection() {
  return (
    <section
      id="collection"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#050816] via-[#0a0f2e] to-[#050816] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
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
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Featured Collection
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            This Week's
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {' '}
              Hottest Drops
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Curated by our style experts. Rent premium fashion pieces for any occasion.
          </p>
        </motion.div>

        {/* Products grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-2xl shadow-pink-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Collection
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
