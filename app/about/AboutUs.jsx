'use client';
import React from 'react';
import Image from 'next/image';
import { assets } from "@/public/assets";

const AboutUs = () => {
  return (
    <section className="min-h-screen w-full bg-[#0f1117] text-white px-4 py-16" >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FE0628]">About Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            At RetrowTech, we blend creativity with technology to build meaningful digital experiences.
          </p>
        </div>

        {/* Mission Section */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Mission</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our mission is to empower businesses with innovative digital solutions that solve real problems and unlock growth.
            We believe in building tools that are both powerful and user-friendly.
          </p>
        </div>

        {/* What We Stand For / Values */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Innovation', desc: 'We push boundaries to create forward-thinking solutions.' },
            { title: 'Transparency', desc: 'We communicate clearly, deliver honestly, and stay accountable.' },
            { title: 'Collaboration', desc: 'We believe great things are built together, not in silos.' },
          ].map((item, index) => (
            <div key={index} className="bg-[#1c1f2b] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-[#FE0628]">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Founder or Team Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src={assets.human}
            alt="Founder"
            width={160}
            height={160}
            className="rounded-full border-4 border-[#FE0628]"
          />
          <div>
            <h3 className="text-2xl font-bold mb-2">Joshua</h3>
            <p className="text-gray-400">
              A passionate engineer and creative technologist. With a background in software engineering and a deep love for AI, 
              Joshua leads with curiosity, builds with purpose, and delivers with care.
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Technologies We Love</h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            {['React', 'Next.js', 'TailwindCSS', 'MySQL', 'Node.js', 'Framer Motion', 'Lottie', 'AI APIs'].map((tech, i) => (
              <span key={i} className="bg-[#1c1f2b] px-4 py-2 rounded-full shadow">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-12">
          <h2 className="text-2xl font-semibold mb-4">Want to Work Together?</h2>
          <p className="text-gray-400 mb-6">We're open to projects, collaborations, and partnerships.</p>
          <a
            href="#contact"
            className="inline-block bg-[#FE0628] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;