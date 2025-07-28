'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { brands } from '@/public/assets';
import { motion, useAnimation } from 'framer-motion';
import Lottie from 'lottie-react';
import globeAnimation from '@/public/animations/globe.json';

const Customers = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: '-80%',
        transition: {
          duration: 22,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <section className="relative w-full py-20 bg-[#181c25] text-white overflow-hidden" id='Customers'>
      
      {/* Globe background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Lottie animationData={globeAnimation} loop={true} className="w-full h-full" />
      </div>

      <div className="relative z-10 text-center mb-10">
        <h2 className="text-4xl font-bold">Our Customers</h2>
        <p className="text-gray-400 mt-2">Brands we've empowered with AI solutions</p>
      </div>

      <div className="relative z-10 w-[90%] mx-auto overflow-hidden">
        <motion.div
          className="flex gap-16 w-max"
          ref={containerRef}
          animate={controls}
        >
          {brands.concat(brands).map((brand, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer flex items-center justify-center w-[100px] h-[100px]"
              onMouseEnter={() => {
                setIsPaused(true);
                setActiveIndex(idx);
              }}
              onMouseLeave={() => {
                setIsPaused(false);
                setActiveIndex(null);
              }}
              onTouchStart={() => {
                setIsPaused(true);
                setActiveIndex(idx);
              }}
              onTouchEnd={() => {
                setIsPaused(false);
                setActiveIndex(null);
              }}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={100}
                className="object-contain"
              />
              {activeIndex === idx && (
                <div className="absolute inset-0 bg-black/80 bg-opacity-70 text-center flex flex-col items-center justify-center rounded-lg transition duration-300">
                  <p className="font-semibold text-sm">{brand.name}</p>
                  <p className="text-xs text-gray-300">{brand.service}</p>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Customers;