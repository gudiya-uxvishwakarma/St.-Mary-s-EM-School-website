import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      {/* Hero Banner */}
      <div className="relative">
        <div className="h-[500px] w-full overflow-hidden">
          <img
            src="/about image.png"
            alt="St. Mary's EM School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white text-center px-4"
            >
              About Us
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link to="/" className="text-xl font-semibold">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-xl font-semibold mt-1" />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xl font-semibold text-black">
                About Us
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="flex-grow px-6 max-w-7xl mx-auto text-gray-800 space-y-12 py-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#0D1B46]">About St. Mary's EM School</h1>
          <p className="mt-2 text-lg md:text-2xl font-medium text-[#050676] max-w-3xl mx-auto">
            Nurturing Minds, Shaping Futures: A Legacy of Excellence in Education
          </p>
          <div className="w-20 h-1 bg-[#050676] mx-auto mt-4"></div>
        </motion.div>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 text-justify"
        >
          <div className="bg-blue-50 p-8 rounded-lg shadow-md border-l-4 border-[#050676]">
            <p className="text-lg leading-relaxed">
              Welcome to St. Mary's EM School, a premier educational institution where academic excellence, holistic development, and
              values-driven education come together to shape the future of our students. Established with a vision to provide quality education
              that nurtures both intellect and character, we have consistently maintained our position as one of the leading schools in the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#0D1B46] border-b-2 border-[#050676] pb-2 inline-block">Our Vision</h2>
              <p className="text-lg">
                At St. Mary's EM School, our vision is to foster an environment where every child can explore their
                potential and develop the skills necessary to succeed in an ever-evolving world. We aim to create global citizens who are
                not only academically proficient but also socially responsible, emotionally intelligent, and ethically grounded.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#0D1B46] border-b-2 border-[#050676] pb-2 inline-block">Our Mission</h2>
              <p className="text-lg">
                Our mission is to provide high-quality education that is rooted in strong academic foundations and
                complemented by values such as respect, integrity, and discipline. We strive to create a learning environment that
                encourages curiosity, critical thinking, and creativity while nurturing each student's unique talents and abilities.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-[#0D1B46] border-b-2 border-[#050676] pb-2 inline-block">Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#0D1B46]">
                <h3 className="text-xl font-bold text-[#0D1B46] mb-2">Excellence in Education</h3>
                <p>We are committed to providing an outstanding educational experience that prepares students for academic success and lifelong learning.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#050676]">
                <h3 className="text-xl font-bold text-[#0D1B46] mb-2">Holistic Development</h3>
                <p>We focus on the intellectual, physical, emotional, and social well-being of our students, ensuring they develop into well-rounded individuals.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#0D1B46]">
                <h3 className="text-xl font-bold text-[#0D1B46] mb-2">Integrity and Respect</h3>
                <p>We instill values of honesty, respect for diversity, and ethical behavior in all aspects of school life.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#050676]">
                <h3 className="text-xl font-bold text-[#0D1B46] mb-2">Innovation and Creativity</h3>
                <p>We encourage curiosity, creative thinking, and innovative problem-solving skills that prepare students for future challenges.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-[#0D1B46] border-b-2 border-[#050676] pb-2 inline-block">Our Approach</h2>
            <p className="text-lg">
              St. Mary's EM School provides a well-rounded curriculum that integrates modern teaching methods with
              traditional values. Our approach to education is student-centered, focusing on individual learning styles and needs.
              We believe in creating an environment where students feel safe, valued, and motivated to learn and grow.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-[#0D1B46] border-b-2 border-[#050676] pb-2 inline-block">Why Choose St. Mary's EM School?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#0D1B46] text-white p-3 rounded-full flex items-center justify-center min-w-[50px] h-[50px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0D1B46]">Experienced Faculty</h3>
                  <p>Our team of dedicated and qualified teachers provides personalized guidance and mentorship to each student.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#0D1B46] text-white p-3 rounded-full flex items-center justify-center min-w-[50px] h-[50px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0D1B46]">State-of-the-Art Infrastructure</h3>
                  <p>Our campus features modern classrooms, well-equipped laboratories, a comprehensive library, and excellent sports facilities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#0D1B46] text-white p-3 rounded-full flex items-center justify-center min-w-[50px] h-[50px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0D1B46]">Inclusive Environment</h3>
                  <p>We provide equal learning opportunities for students from all backgrounds, fostering diversity and inclusion.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#0D1B46] text-white p-3 rounded-full flex items-center justify-center min-w-[50px] h-[50px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0D1B46]">Extracurricular Activities</h3>
                  <p>We offer a wide range of activities in arts, sports, music, and cultural programs to nurture diverse talents.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#0D1B46] to-[#1a3380] text-white p-8 rounded-lg shadow-lg mt-8"
          >
            <p className="text-xl font-medium leading-relaxed">
              At St. Mary's EM School, we are committed to making learning an enjoyable and enriching experience. Join us on
              this exciting educational journey and become a part of our growing family!
            </p>
            <div className="mt-6 flex justify-center">
              <Link to="/contact" className="bg-[#050676] hover:bg-[#adefee] text-white px-8 py-3 rounded-md font-semibold transition-colors text-lg">
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
