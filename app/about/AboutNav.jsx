'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

// Lazy load the Contact component to avoid SSR issues
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });

const AboutNav = () => {
  const [open, setOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleContactClick = () => {
    setShowContactModal(true);
    setOpen(false);
  };

  useEffect(() => {
  if (open || showContactModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = '';
  };
}, [open, showContactModal]);



  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#181c25]/90 backdrop-blur-md text-white">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#FE0628] tracking-tight">RetrowTech</h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
            <li>
              <Link href="/" className="hover:text-[#FE0628] transition">Home</Link>
            </li>
            {['Customers', 'Services', 'Client Feedback'].map((section) => (
              <li key={section}>
                <ScrollLink 
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hover:text-[#FE0628] cursor-pointer transition"
                >
                  {section}
                </ScrollLink>
              </li>
            ))}
            <li>
              <button
                onClick={handleContactClick}
                className="bg-[#FE0628] text-white px-4 py-1.5 rounded-md hover:bg-opacity-80 transition"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden z-50">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 bg-[#282F39] shadow-lg flex flex-col py-8 space-y-6 md:hidden z-40"
            >
              <Link href="/" className="text-lg px-6 font-medium text-white hover:text-[#FE0628] transition border-b border-[#bcc8d6] pb-3" onClick={() => setOpen(false)}>
                Home
              </Link>
              {['Customers', 'Services', 'Client Feedback'].map((section) => (
                <ScrollLink 
                  key={section}
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-lg px-6 font-medium text-white hover:text-[#FE0628] transition cursor-pointer border-b border-[#bcc8d6] pb-3"
                  onClick={() => setOpen(false)}
                >
                  {section}
                </ScrollLink>
              ))}

              <div className='px-6'>
                <button
                onClick={handleContactClick}
                className="bg-[#FE0628] text-white px-4 py-2 rounded-md self-start"
              >
                Contact
              </button>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-[#0f1117] z-[60] shadow-lg overflow-y-auto"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setShowContactModal(false)}>
                <X size={24} className="text-[#959595] hover:text-[#FE0628]" />
              </button>
            </div>
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutNav;