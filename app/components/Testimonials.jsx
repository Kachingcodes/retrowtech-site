'use client';
import React from 'react';
import Image from 'next/image';
import { caseStudies } from "@/public/assets";


const Testimonials = () => {
  return (
    <section className="bg-white text-black py-20 px-6" id="Client Feedback">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Success Stories</h2>
        <p className="text-gray-600 mt-2">Real results from businesses that embraced AI with us</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {caseStudies.map((study, idx) => (
          <div key={idx} className="bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <Image src={study.logo} alt={study.name} width={50} height={50} className="rounded" />
              <h3 className="font-semibold text-lg">{study.name}</h3>
            </div>
            <blockquote className="text-gray-700 italic mb-4">
              “{study.quote}”
            </blockquote>
            <p className="font-bold text-indigo-600 mb-2">{study.result}</p>
            {study.link && (
              <a href={study.link} className="text-indigo-500 hover:underline text-sm">
                Read Case Study →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
