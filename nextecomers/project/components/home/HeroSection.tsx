'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gray-100">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to MEENA</h1>
        <p className="text-xl mb-8">Discover Luxury Fashion & Accessories</p>
        <Link 
          href="/shop"
          className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Shop Now
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;