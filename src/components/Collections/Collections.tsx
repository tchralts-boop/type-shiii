'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  color: string;
}

const Collections: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products: Product[] = [
    {
      id: 1,
      name: 'Oversized Hoodie',
      price: 89,
      category: 'hoodies',
      image: '/products/hoodie-1.jpg',
      color: 'Jet Black',
    },
    {
      id: 2,
      name: 'Cargo Pants',
      price: 79,
      category: 'pants',
      image: '/products/cargo-1.jpg',
      color: 'Charcoal',
    },
    {
      id: 3,
      name: 'Street Tee',
      price: 39,
      category: 'tees',
      image: '/products/tee-1.jpg',
      color: 'Off White',
    },
    {
      id: 4,
      name: 'Leather Jacket',
      price: 199,
      category: 'jackets',
      image: '/products/jacket-1.jpg',
      color: 'Black',
    },
    {
      id: 5,
      name: 'Limited Hoodie',
      price: 99,
      category: 'hoodies',
      image: '/products/hoodie-2.jpg',
      color: 'Charcoal Red',
    },
    {
      id: 6,
      name: 'Cargo Shorts',
      price: 59,
      category: 'shorts',
      image: '/products/shorts-1.jpg',
      color: 'Olive',
    },
  ];

  const categories = ['all', 'hoodies', 'pants', 'tees', 'jackets', 'shorts'];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

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
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-brand-offWhite">
            Collections
          </h2>
          <p className="text-brand-offWhite/70 text-lg max-w-2xl mx-auto">
            Curated streetwear pieces designed for those who demand authenticity and style.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 uppercase text-sm font-bold tracking-widest transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-brand-red text-brand-black'
                  : 'border border-brand-offWhite/30 text-brand-offWhite hover:border-brand-red hover:text-brand-red'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden mb-4 bg-brand-charcoal aspect-square">
                <div className="w-full h-full bg-gradient-to-br from-brand-charcoal to-brand-black flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-black text-brand-red/20 mb-4">
                      {product.id}
                    </div>
                    <p className="text-brand-offWhite/50">{product.name}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-brand-red/80 flex items-center justify-center"
                >
                  <button className="px-8 py-3 bg-brand-black text-brand-red font-bold uppercase text-sm tracking-widest hover:bg-brand-offWhite hover:text-brand-black transition-all duration-300">
                    Quick View
                  </button>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-brand-offWhite group-hover:text-brand-red transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-brand-offWhite/60 text-sm uppercase tracking-widest">
                  {product.color}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-black text-brand-red">
                    ${product.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-brand-red text-brand-black hover:bg-brand-offWhite transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10-9l2 9m-6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-brand-red text-brand-black font-bold uppercase text-lg tracking-widest hover:bg-brand-offWhite transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Collections
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;
