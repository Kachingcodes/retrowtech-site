import React from "react";
import { capabilities } from "@/public/assets";
import Lottie from "lottie-react";
import { motion } from "framer-motion"; // ← Import motion

const Services = () => {
  return (
    <section className="w-full py-20 bg-[#181c25] text-white overflow-x-hidden" id="Services">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">What We Offer</h2>
        <p className="text-red-500 mt-3">
          AI Capabilities designed to drive business growth
        </p>
      </div>

      <div className="flex flex-col gap-12 max-w-6xl mx-auto px-6">
        {capabilities.map((capability, idx) => {
          const fromLeft = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6 md:justify-evenly"
              initial={{ opacity: 0, x: fromLeft ? -56 : 56 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.0, delay: idx * 0.3, ease: "easeOut" }}
            >
              {/* Card only on the left content */}
              <div className="bg-black/10 text-white p-9 rounded-xl shadow-md w-full md:w-[40%] border-2 border-white/6">
                <div className="flex items-start gap-6">
                  <div className="mt-1">{capability.icon}</div>
                  <div>
                    <h3 className="md:text-2xl text-xl font-semibold mb-1">
                      {capability.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-2sm">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Lottie animation beside the card */}
              <div className="w-32 h-32 md:w-56 md:h-50 flex-shrink-0">
                <Lottie animationData={capability.animation} loop autoplay />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;