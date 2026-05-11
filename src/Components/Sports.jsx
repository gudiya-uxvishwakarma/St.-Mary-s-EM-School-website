import React from 'react';
import { motion } from 'framer-motion';
import Nav from './Nav';
import Footer from './Footer';
import { ScrollReveal } from './ScrollReveal';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';

// Animation variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.6,
      staggerChildren: 0.2
    }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.4 }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const sportCardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
  hover: {
    y: -10,
    boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export default function Sports() {
  const sportsCategories = [
    {
      title: "Cricket",
      description: "Our cricket teams compete at district and state levels with professional coaching.",
      icon: "🏏"
    },
    {
      title: "Football",
      description: "State-of-the-art football field with regular training and tournaments.",
      icon: "⚽"
    },
    {
      title: "Basketball",
      description: "Indoor and outdoor courts with specialized training programs.",
      icon: "🏀"
    },
    {
      title: "Swimming",
      description: "Olympic-sized swimming pool with certified instructors for all levels.",
      icon: "🏊‍♂️"
    },
    {
      title: "Athletics",
      description: "Track and field events with modern facilities and equipment.",
      icon: "🏃‍♂️"
    },
    {
      title: "Badminton",
      description: "Indoor courts with professional coaching for beginners to advanced players.",
      icon: "🏸"
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-gray-100 min-h-screen"
    >
      <Nav />
      
      {/* Hero Section */}
      <motion.div 
        className="relative h-[350px] bg-gradient-to-r from-[#0D1B46] to-[#1c3a8e]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white">Sports</h1>
        </motion.div>
      </motion.div>

      {/* Breadcrumb */}
      <motion.div 
        className="container mx-auto px-4 py-6"
        variants={itemVariants}
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link to="/" className="text-xl font-semibold">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-xl font-semibold mt-1" />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link to="/" className="text-xl font-semibold">Events</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-xl font-semibold mt-1" />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xl font-semibold text-black">
                Sports
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </motion.div>

      {/* Main Content */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg text-lg leading-relaxed space-y-6"
              variants={itemVariants}
            >
              <motion.p variants={itemVariants}>
                At our school, we believe that sports play a vital role in the holistic development of students. 
                Our comprehensive sports program is designed to promote physical fitness, teamwork, discipline, 
                and sportsmanship among students of all ages.
              </motion.p>

              <motion.p variants={itemVariants}>
                We offer a wide range of sports facilities and activities, including cricket, football, basketball, 
                swimming, athletics, badminton, and more. Our state-of-the-art infrastructure includes well-maintained 
                playing fields, courts, and a modern gymnasium.
              </motion.p>

              <motion.p variants={itemVariants}>
                Our dedicated team of qualified coaches and physical education instructors provide expert guidance 
                and training to students. Regular practice sessions, inter-house competitions, and participation in 
                external tournaments help students develop their skills and competitive spirit.
              </motion.p>

              <motion.p variants={itemVariants}>
                We take pride in our students' achievements in various sports at district, state, and national levels. 
                Our sports program not only nurtures talent but also instills important values such as perseverance, 
                resilience, and fair play.
              </motion.p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Sports Categories */}
      <div className="py-16 bg-white">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-[#0D1B46]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sports <span className="text-[#050676]">Categories</span>
        </motion.h2>
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsCategories.map((sport, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md"
                variants={sportCardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <motion.span 
                    className="text-7xl"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {sport.icon}
                  </motion.span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0D1B46] mb-2">{sport.title}</h3>
                  <p className="text-gray-600">{sport.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-[#0D1B46]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="text-[#050676]">Achievements</span>
          </motion.h2>
          
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-[#050676] mb-2">25+</div>
                <div className="text-lg font-medium text-gray-700">State Level Medals</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-[#050676] mb-2">50+</div>
                <div className="text-lg font-medium text-gray-700">District Championships</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-[#050676] mb-2">10+</div>
                <div className="text-lg font-medium text-gray-700">National Representations</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
