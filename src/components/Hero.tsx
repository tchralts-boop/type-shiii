'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen bg-brand-black flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 -left-64 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div
            variants={textVariants}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="inline-block px-4 py-2 bg-brand-red/20 text-brand-red uppercase text-xs font-bold tracking-widest">
                New Collection Available
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-brand-offWhite leading-tight mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="block"
                >
                  TYPE
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="block text-brand-red"
                >
                  SHIII
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-brand-offWhite/70 max-w-xl leading-relaxed"
            >
              Authentic streetwear designed for those who refuse to blend in. 
              Express yourself with pieces that make a statement.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-brand-red text-brand-black font-bold uppercase text-lg tracking-widest hover:bg-brand-offWhite transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-brand-offWhite text-brand-offWhite font-bold uppercase text-lg tracking-widest hover:bg-brand-offWhite hover:text-brand-black transition-all duration-300"
              >
                Explore
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-brand-offWhite/10"
            >
              {[
                { number: '10K+', label: 'Customers' },
                { number: '50+', label: 'Countries' },
                { number: '100%', label: 'Authentic' },
              ].map((stat, index) => (
                <div key={index}>
                  <motion.div
                    whileHover={{ color: '#FF3B30' }}
                    className="text-3xl font-black text-brand-offWhite"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-brand-offWhite/60 text-sm uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-96 md:h-full min-h-[500px] flex items-center justify-center"
          >
            {/* Main Image Placeholder */}
            <div className="relative w-full h-full">
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 border-2 border-transparent border-t-brand-red border-r-brand-red rounded-full"
              />

              {/* Inner Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="relative w-72 h-96 bg-gradient-to-br from-brand-charcoal to-brand-black rounded-lg overflow-hidden"
                >
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="text-8xl font-black text-brand-red/30">
                      ∆
                    </div>
                    <p className="text-brand-offWhite/60 uppercase tracking-widest text-center">
                      Featured Item
                    </p>
                  </div>

                  {/* Glowing Border */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(255, 59, 48, 0.3)',
                        '0 0 40px rgba(255, 59, 48, 0.5)',
                        '0 0 20px rgba(255, 59, 48, 0.3)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 rounded-lg pointer-events-none"
                  />
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="absolute top-10 right-10 w-20 h-20 border border-brand-red/50 rounded-lg"
              />
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
                className="absolute bottom-10 left-10 w-16 h-16 border border-brand-red/30 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-brand-offWhite/60 text-xs uppercase tracking-widest">
              Scroll to explore
            </p>
            <svg
              className="w-5 h-5 text-brand-red"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
