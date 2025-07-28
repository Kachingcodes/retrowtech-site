// app/components/Hero.jsx
"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { assets } from "@/public/assets";
import {terminalLines} from "@/public/assets"; 
import workflow from "@/public/animations/workflow.json";

const Hero = () => {
  const [showText, setShowText] = useState(false);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= terminalLines.length) {
      setTimeout(() => setShowText(true), 2000);
      return;
    }

    const currentLine = terminalLines[lineIndex];
    const interval = setInterval(() => {
      setDisplayedLines((prev) => {
        const updated = [...prev];
        updated[lineIndex] = (updated[lineIndex] || "") + currentLine[charIndex];
        return updated;
      });

      setCharIndex((prev) => prev + 1);

      if (charIndex + 1 === currentLine.length) {
        clearInterval(interval);
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [charIndex, lineIndex]);

  return (
    <section
  className="relative w-full h-screen text-white overflow-hidden transition-all duration-1000"
  style={{
     backgroundImage: showText ? `url(${assets.hud_bg.src})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: showText ? "transparent" : "#181c25",
  }}
>
  
  {showText && (
  <div className="absolute inset-0 bg-[#181c25]/90 z-0 pointer-events-none"></div>
)}


      {/* Initial Lottie + Terminal */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={showText ? { opacity: 0, y: -40 } : { opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10"
      >
        <Lottie animationData={workflow} className="w-50 h-50 md:w-90 md:h-90 mb-6" loop autoplay />

        {/* Terminal */}
        <div className="bg-[#01060d] text-green-400 font-mono text-sm p-4 rounded-lg w-[90%] max-w-xl shadow-lg border border-white/20">
          {displayedLines.map((line, index) => (
            <div key={index} className="whitespace-pre">{line}</div>
          ))}
        </div>
      </motion.div>

      {/* Reveal Text + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={showText ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute inset-0 flex flex-col items-center justify-center z-0 text-center px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Power Your Business With AI
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-xl">
          Unlock insights, automate operations, and stay ahead with our smart AI solutions.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;