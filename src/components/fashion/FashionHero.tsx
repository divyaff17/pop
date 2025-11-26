import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FashionScene } from '@/components/3d/FashionScene';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
  },
};

export function FashionHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#050816] via-[#0a0f2e] to-[#050816]"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10 space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                New Collection Drop
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Redefine Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Fashion Story
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
            >
              Discover curated streetwear and premium styles. Delivered in 60 minutes.
              Rent, wear, return. No commitment, just pure style.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-2xl shadow-pink-500/50 text-lg px-8 py-6 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Shop the Drop
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-white border-2 border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400 text-lg px-8 py-6"
              >
                View Collection
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 pt-4"
            >
              <div>
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-gray-700" />
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Premium Styles</div>
              </div>
              <div className="w-px h-12 bg-gray-700" />
              <div>
                <div className="text-3xl font-bold text-white">60min</div>
                <div className="text-sm text-gray-400">Fast Delivery</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[400px] md:h-[600px] lg:h-[700px]"
          >
            <Canvas
              className="w-full h-full"
              style={{ background: 'transparent' }}
            >
              <PerspectiveCamera makeDefault position={[0, 0, 6]} />
              <Suspense fallback={null}>
                <FashionScene />
              </Suspense>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>

            {/* Glow effect behind canvas */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-pink-500/30 via-purple-500/20 to-transparent blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
