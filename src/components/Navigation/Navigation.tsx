'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Shop', 'New Drop', 'About', 'Contact'];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
    },
    hover: {
      color: '#FF3B30',
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black text-brand-offWhite cursor-pointer"
          >
            <span className="text-brand-red">TYPE</span>
            <span> SHIII</span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <motion.ul
            variants={menuVariants}
            className="flex gap-8"
          >
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="text-brand-offWhite font-medium cursor-pointer uppercase text-sm tracking-widest"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          {/* Cart Icon */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="text-brand-offWhite font-bold uppercase text-sm tracking-widest border border-brand-red text-brand-red px-6 py-2 hover:bg-brand-red hover:text-brand-black transition-all duration-300"
          >
            Cart
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-brand-offWhite"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-brand-offWhite/10"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-brand-offWhite font-medium cursor-pointer uppercase text-sm tracking-widest hover:text-brand-red transition-colors"
              >
                {item}
              </motion.p>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full text-brand-offWhite font-bold uppercase text-sm tracking-widest border border-brand-red text-brand-red px-6 py-2 hover:bg-brand-red hover:text-brand-black transition-all duration-300"
            >
              Cart
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
