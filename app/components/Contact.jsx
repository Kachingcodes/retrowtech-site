'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import Lottie from 'lottie-react';
import workflow from "@/public/animations/workflow.json";

const Contact = () => {
  return (
    <section className="w-full py-14 bg-[#0f1117] text-white px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-full h-[200px] flex justify-center items-center mb-5">
          <Lottie animationData={workflow} loop={true} className="w-full h-full max-w-md" />
        </div>
        <h2 className="text-4xl font-bold mb-7">Get in Touch</h2>
        <p className="text-gray-400 mb-6">
          We'd love to hear from you! Fill out the form below and our team will get back to you shortly.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-lg bg-[#1c1f2b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FE0628] col-span-1"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-lg bg-[#1c1f2b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FE0628] col-span-1"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded-lg bg-[#1c1f2b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FE0628] md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="bg-[#FE0628] hover:bg-red-700 transition text-white font-semibold py-3 rounded-lg md:col-span-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;