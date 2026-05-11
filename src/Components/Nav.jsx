import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
// Remove the problematic import completely 

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="w-full bg-white z-50 shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex-shrink-0">
              <img className="h-16 w-auto rounded-full" src="/logo.png" alt="St. Mary's EM School Logo" />
            </Link>
           
          </div>

          {/* SMMI Logo and YouTube - Fixed on Right Side */}
          <div className="bg-white fixed bg-opacity-90 z-40 top-[25rem] rounded-tl-xl rounded-bl-xl space-y-3 px-3 py-3 right-0 shadow-lg">
            <a href="https://smmikarnataka.in" target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform">
              <img 
                src="https://smmikarnataka.in/wp-content/uploads/2019/06/smmi-logo-final-02.gif" 
                alt="SMMI Logo" 
                className="h-16 w-16 object-contain"
              />
            </a>
            <a href="https://www.youtube.com/@stmaryschoolmotukupalli" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center hover:scale-110 transition-transform">
              <FaYoutube size={32} className="text-[#050676] hover:text-red-600" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-base font-semibold transition-colors text-gray-700 hover:text-[#0347af]">Home</Link>
            <Link to="/AboutUs" className="text-base font-semibold transition-colors text-gray-700 hover:text-[#0347af]">About Us</Link>
            <Link to="/gallery" className="text-base font-semibold transition-colors text-gray-700 hover:text-[#0347af]">Gallery</Link>
            <Link to="/blog" className="text-base font-semibold transition-colors text-gray-700 hover:text-[#0347af]">Blog</Link>
            <Link to="/contact" className="text-base font-semibold px-4 py-2 rounded-md transition-colors" style={{ backgroundColor: '#000076', color: 'white' }}>Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden transition-transform duration-300">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none transition-transform duration-300 text-[#000076]">
              {mobileMenuOpen ? <X size={28} className="rotate-180 transition-transform" /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className={`md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{ maxHeight: mobileMenuOpen ? "500px" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-6 py-4 space-y-4 shadow-md">
            <Link to="/" className="block py-2 font-semibold text-gray-700 hover:text-[#0347af] transition-colors">Home</Link>
            <Link to="/AboutUs" className="block py-2 font-semibold text-gray-700 hover:text-[#0347af] transition-colors">About Us</Link>
            <Link to="/gallery" className="block py-2 font-semibold text-gray-700 hover:text-[#0347af] transition-colors">Gallery</Link>
            <Link to="/blog" className="block py-2 font-semibold text-gray-700 hover:text-[#0347af] transition-colors">Blog</Link>
            <Link to="/contact" className="block py-2 font-semibold text-white text-center rounded-md transition-colors" style={{ backgroundColor: '#000076' }}>Contact</Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
