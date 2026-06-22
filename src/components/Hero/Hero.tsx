'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import StreetWearCharacter from './StreetWearCharacter';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-brand-black">
      {/* 3D Character Background */}
      <StreetWearCharacter />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {/* Logo Animation */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={logoVariants}
          className="mb-8"
        >
          <div className="text-center">
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-2 text-brand-offWhite drop-shadow-lg">
              TYPE
            </h1>
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-brand-red drop-shadow-lg">
              SHIII
            </h1>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={textVariants}
          className="text-xl md:text-2xl text-brand-offWhite text-center max-w-2xl mb-12 font-light tracking-wide drop-shadow-md"
        >
          Built For Those Who Set Trends, Not Follow Them.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={buttonVariants}
          className="flex gap-4 md:gap-6 pointer-events-auto"
        >
          <motion.button
            whileHover="hover"
            variants={buttonVariants}
            className="px-8 md:px-10 py-3 md:py-4 bg-brand-red text-brand-black font-bold text-lg rounded-none hover:bg-brand-offWhite transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
          >
            Shop Collection
          </motion.button>
          <motion.button
            whileHover="hover"
            variants={buttonVariants}
            className="px-8 md:px-10 py-3 md:py-4 border-2 border-brand-offWhite text-brand-offWhite font-bold text-lg rounded-none hover:bg-brand-offWhite hover:text-brand-black transition-all duration-300 cursor-pointer"
          >
            Latest Drop
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-brand-offWhite text-sm uppercase tracking-widest">Scroll</span>
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-brand-black/20 via-transparent to-brand-black/50" />
    </div>
  );
};

export default Hero;
