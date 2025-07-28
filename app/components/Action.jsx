'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Action = () => {
  return (
    <section className="w-full bg-[#181c25] py-26 text-white flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center max-w-3xl px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Take Your Business into the Future?
        </h2>
<div className="inline-block p-[2px] bg-gradient-to-r from-[#4C5662] via-[#959595] to-[#181c25] rounded-full hover:animate-pulse transition duration-300">
  <button className="px-6 py-4 bg-white text-red-500 font-semibold text-lg rounded-full hover:bg-[#959595] transition duration-300 shadow-md">
    Let’s Talk
  </button>
</div>

      </motion.div>
    </section>
  );
};

export default Action;