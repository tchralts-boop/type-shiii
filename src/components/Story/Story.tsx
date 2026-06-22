'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Story: React.FC = () => {
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

  const storyPoints = [
    {
      year: '2020',
      title: 'The Beginning',
      description:
        'Started in a small garage with a dream to revolutionize streetwear. Our first collection was raw, unpolished, and authentic.',
    },
    {
      year: '2022',
      title: 'Going Global',
      description:
        'Expanded to 15 countries and collaborated with international street artists. Our designs began turning heads in major cities worldwide.',
    },
    {
      year: '2023',
      title: 'Cultural Impact',
      description:
        'Became a staple in street culture. Our pieces were worn by influencers, artists, and anyone who refuses to blend in.',
    },
    {
      year: '2024',
      title: 'The Next Chapter',
      description:
        'Pushing boundaries with sustainable materials and limited drops. TYPE SHIII is no longer just clothing—it\'s a movement.',
    },
  ];

  return (
    <section className="py-20 bg-brand-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-brand-offWhite">
            Our Story
          </h2>
          <p className="text-brand-offWhite/70 text-lg max-w-2xl mx-auto">
            From a garage dream to a global movement. This is how TYPE SHIII changed the game.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-red via-brand-red/50 to-transparent transform -translate-x-1/2" />

          <div className="space-y-12">
            {storyPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col md:flex-row gap-8 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                    className="p-6 glass group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-brand-red rounded-full" />
                      <span className="text-brand-red font-black text-xl">
                        {point.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-brand-offWhite mb-3 group-hover:text-brand-red transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-brand-offWhite/70 leading-relaxed">
                      {point.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex flex-1 justify-center items-start pt-6">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 bg-brand-red rounded-full border-4 border-brand-charcoal shadow-lg"
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: '✦',
              title: 'Authenticity',
              description:
                'We stay true to our roots. No compromises, no selling out. Real recognizes real.',
            },
            {
              icon: '★',
              title: 'Innovation',
              description:
                'Pushing boundaries in design and sustainability. Leading, never following trends.',
            },
            {
              icon: '◆',
              title: 'Community',
              description:
                'Our customers are our family. We grow together and celebrate individuality.',
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="text-center p-6"
            >
              <motion.div
                className="text-5xl text-brand-red mb-4"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
              >
                {value.icon}
              </motion.div>
              <h4 className="text-xl font-bold text-brand-offWhite mb-3">
                {value.title}
              </h4>
              <p className="text-brand-offWhite/70">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-brand-offWhite/70 text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of trendsetters who've made TYPE SHIII part of their identity.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-brand-red text-brand-black font-bold uppercase text-lg tracking-widest hover:bg-brand-offWhite transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
