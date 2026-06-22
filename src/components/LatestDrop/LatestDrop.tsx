'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LatestDrop: React.FC = () => {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-brand-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-brand-red/20 text-brand-red uppercase text-xs font-bold tracking-widest mb-4"
          >
            Limited Edition
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-brand-offWhite">
            Latest Drop
          </h2>
          <p className="text-brand-offWhite/70 text-lg max-w-2xl mx-auto">
            Exclusive pieces dropping this week. Limited quantities available.
          </p>
        </motion.div>

        {/* Featured Drop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Left Side - Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full min-h-[500px] bg-gradient-to-br from-brand-charcoal to-brand-black rounded-lg overflow-hidden group"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl font-black text-brand-red/20 mb-4">
                  NEW
                </div>
                <p className="text-brand-offWhite/50 uppercase tracking-widest">
                  Collection Drop
                </p>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-brand-red/20 to-transparent"
            />
          </motion.div>

          {/* Right Side - Details */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-brand-offWhite mb-4">
                Street Essence
              </h3>
              <p className="text-brand-offWhite/70 text-lg leading-relaxed">
                A carefully curated collection that captures the essence of urban street culture. 
                Each piece tells a story of authenticity and rebellion against the mainstream.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 glass rounded-lg">
                <div className="text-3xl font-black text-brand-red">500+</div>
                <p className="text-brand-offWhite/60 text-sm uppercase tracking-widest">
                  Items
                </p>
              </div>
              <div className="p-4 glass rounded-lg">
                <div className="text-3xl font-black text-brand-red">48h</div>
                <p className="text-brand-offWhite/60 text-sm uppercase tracking-widest">
                  Limited Time
                </p>
              </div>
              <div className="p-4 glass rounded-lg">
                <div className="text-3xl font-black text-brand-red">10%</div>
                <p className="text-brand-offWhite/60 text-sm uppercase tracking-widest">
                  Early Access
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-brand-red text-brand-black font-bold uppercase text-lg tracking-widest hover:bg-brand-offWhite transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Latest Drop
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Upcoming Releases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-black text-brand-offWhite mb-8">
            Coming Soon
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Urban Legends Collection',
                date: 'June 28',
                items: '75 pieces',
              },
              {
                title: 'Summer Vibes Drop',
                date: 'July 5',
                items: '120 pieces',
              },
              {
                title: 'Neon Dreams Limited',
                date: 'July 12',
                items: '50 pieces',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 glass group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-brand-red rounded-full" />
                  <span className="text-brand-red uppercase text-xs font-bold tracking-widest">
                    {item.date}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-brand-offWhite mb-3 group-hover:text-brand-red transition-colors">
                  {item.title}
                </h4>
                <p className="text-brand-offWhite/60 text-sm uppercase tracking-widest">
                  {item.items}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 p-8 md:p-12 glass rounded-lg text-center"
        >
          <h3 className="text-2xl md:text-3xl font-black text-brand-offWhite mb-4">
            Be First to Know
          </h3>
          <p className="text-brand-offWhite/70 mb-6">
            Join our community and get early access to new drops and exclusive offers.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-brand-black border border-brand-offWhite/20 text-brand-offWhite placeholder-brand-offWhite/50 focus:outline-none focus:border-brand-red transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-brand-red text-brand-black font-bold uppercase text-sm tracking-widest hover:bg-brand-offWhite transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestDrop;
