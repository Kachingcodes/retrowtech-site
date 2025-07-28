'use client';
import React from 'react';
import { Mail, Phone, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F1117] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Navigation */}
        <div>
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/legal" className="hover:text-white">Legal</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-xl mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Get the latest updates straight to your inbox.</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded bg-[#1B1E24] text-white placeholder-gray-400"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 transition rounded p-2 font-semibold">
              Subscribe
            </button>
          </form>
        </div>

        {/* Mini Contact Form */}
        {/* <div>
          <h3 className="font-bold text-xl mb-4">Message Us</h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded bg-[#1B1E24] text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded bg-[#1B1E24] text-white placeholder-gray-400"
            />
            <textarea
              rows={3}
              placeholder="Your message"
              className="p-2 rounded bg-[#1B1E24] text-white placeholder-gray-400"
            ></textarea>
            <button className="bg-purple-600 hover:bg-purple-700 transition rounded p-2 font-semibold">
              Send Message
            </button>
          </form>
        </div> */}

        {/* Social Icons + Contact */}
        <div>
          <h3 className="font-bold text-xl mb-4">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-indigo-400"><Twitter /></a>
            <a href="#" className="hover:text-indigo-400"><Facebook /></a>
            <a href="#" className="hover:text-indigo-400"><Instagram /></a>
            <a href="#" className="hover:text-indigo-400"><Linkedin /></a>
          </div>
          <div className="text-sm text-gray-400 space-y-1">
            <p className="flex items-center gap-2"><Mail size={16} /> hello@yourdomain.com</p>
            <p className="flex items-center gap-2"><Phone size={16} /> +234 800 000 0000</p>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 mt-12 text-sm">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
