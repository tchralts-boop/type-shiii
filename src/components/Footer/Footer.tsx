'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Shop',
      links: ['New Arrivals', 'Best Sellers', 'Collections', 'Sale', 'Gift Cards'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Blog', 'Contact'],
    },
    {
      title: 'Support',
      links: ['FAQ', 'Shipping Info', 'Returns', 'Size Guide', 'Contact Us'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'ig' },
    { name: 'Twitter', icon: 'tw' },
    { name: 'TikTok', icon: 'tk' },
    { name: 'YouTube', icon: 'yt' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const linkHoverVariants = {
    hover: {
      color: '#FF3B30',
      x: 5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <footer className="bg-brand-black border-t border-brand-offWhite/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-black text-brand-offWhite cursor-pointer"
              >
                <span className="text-brand-red">TYPE</span>
                <span> SHIII</span>
              </motion.div>
            </Link>
            <p className="text-brand-offWhite/60 text-sm leading-relaxed mb-6">
              Built for those who set trends, not follow them. Authentic streetwear for rebels and trendsetters.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#FF3B30' }}
                  className="w-10 h-10 flex items-center justify-center border border-brand-offWhite/30 text-brand-offWhite hover:border-brand-red transition-colors text-xs font-bold"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div key={sectionIndex} variants={itemVariants}>
              <h4 className="text-brand-offWhite font-bold uppercase text-sm tracking-widest mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex} variants={linkHoverVariants} whileHover="hover">
                    <a
                      href="#"
                      className="text-brand-offWhite/70 text-sm hover:text-brand-red transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 p-8 glass rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-black text-brand-offWhite mb-2">
                Join the Tribe
              </h3>
              <p className="text-brand-offWhite/70 text-sm">
                Get exclusive drops, early access, and insider tips delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-brand-black border border-brand-offWhite/20 text-brand-offWhite placeholder-brand-offWhite/50 focus:outline-none focus:border-brand-red transition-colors text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-brand-red text-brand-black font-bold uppercase text-xs tracking-widest hover:bg-brand-offWhite transition-all duration-300"
              >
                Join
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-offWhite/20 to-transparent mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between text-sm text-brand-offWhite/60"
        >
          <p>© {currentYear} TYPE SHIII. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-red transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-brand-red transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-brand-red transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="fixed bottom-8 right-8 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="text-brand-red/20 text-6xl font-black"
        >
          ★
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
