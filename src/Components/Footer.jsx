import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-10 lg:px-16" style={{ backgroundColor: '#000076', color: 'white' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* School Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="St. Mary's EM School Logo" className="h-16 w-16 rounded-full object-cover" />
            
          </div>
          <p className="text-base leading-relaxed" style={{ color: '#adefee' }}>
            Providing quality education and nurturing young minds to become future leaders through holistic development and academic excellence.
          </p>
          <div className="flex space-x-4 pt-4">
            <a 
              href="https://www.facebook.com/Presidencypublicschool" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-all hover:scale-110 hover:text-white" 
              style={{ color: '#adefee' }}
            >
              <FaFacebookF size={24} />
            </a>
            <a 
              href="https://www.instagram.com/presidencypublicschool/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-all hover:scale-110 hover:text-white" 
              style={{ color: '#adefee' }}
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://www.youtube.com/@stmaryschoolmotukupalli" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-all hover:scale-110 hover:text-white" 
              style={{ color: '#adefee' }}
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold mb-6" style={{ color: '#fdf622' }}>Quick Links</h3>
          <ul className="space-y-3" style={{ color: '#adefee' }}>
            <li><Link to="/about" className="transition-colors hover:text-white">About Us</Link></li>
            <li><Link to="/academics/curriculum" className="transition-colors hover:text-white">Academics</Link></li>
            <li><Link to="/admissions" className="transition-colors hover:text-white">Admissions</Link></li>
            <li><Link to="/gallery" className="transition-colors hover:text-white">Gallery</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-white">Contact Us</Link></li>
            <li><Link to="/career" className="transition-colors hover:text-white">Careers</Link></li>
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold mb-6" style={{ color: '#fdf622' }}>Contact Us</h3>
          <div className="space-y-4" style={{ color: '#adefee' }}>
            <div className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3" size={18} style={{ color: '#fdf622' }} />
              <p>
                ST. MARY'S ENGLISH MEDIUM SCHOOL<br />
                Motukupalli, Kadiri - 515 591<br />
                Sri Sathya Sai District,<br />
                Andhra Pradesh, India
              </p>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-3" size={16} style={{ color: '#fdf622' }} />
              <p>+9550345393</p>
            
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-3" size={16} style={{ color: '#fdf622' }} />
              <p>stmarysglobal25@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 pt-8 text-center text-base"
        style={{ borderTop: '1px solid #0347af' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="tracking-wider" style={{ color: '#adefee' }}>
          Copyright © St. Mary's EM School Kadiri {new Date().getFullYear()} | All Rights Reserved
        </span>
      </motion.div>
    </footer>
  );
}
