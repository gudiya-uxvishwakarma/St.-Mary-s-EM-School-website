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

import scienceImg from '/E1.jpeg';
import artImg from '/E2.jpeg';
import techImg from '/E3.jpeg';
import literaryImg from '/E4.jpeg';
import environmentImg from '/E5.jpeg';
import heritageImg from '/E6.jpeg';

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

const cardVariants = {
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

export default function Exhibition() {
  const exhibitionItems = [
    {
      title: "Science Exhibition",
      description: "Innovative projects demonstrating scientific principles and their practical applications.",
      image: scienceImg
    },
    {
      title: "Art Exhibition",
      description: "Creative expressions across different mediums including painting, sculpture, and digital art.",
      image: artImg
    },
    {
      title: "Technology Showcase",
      description: "Student projects in robotics, coding, 3D printing, and other emerging technologies.",
      image: techImg
    },
    {
      title: "Literary Display",
      description: "Creative writing, poetry, and storytelling showcasing students' literary talents.",
      image: literaryImg
    },
    {
      title: "Environmental Projects",
      description: "Sustainable solutions and awareness projects focused on environmental conservation.",
      image: environmentImg
    },
    {
      title: "Cultural Heritage",
      description: "Displays celebrating diverse cultural traditions and historical significance.",
      image: heritageImg
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Nav />
      
      <motion.div 
  className="relative h-[600px] bg-[url('/E1.jpeg')] bg-cover bg-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <motion.div 
    className="absolute inset-0 bg-gradient-to-r  flex items-center justify-center"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8 }}
  >
    <h1 className="text-5xl font-bold text-white">Exihibition</h1>
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
                Exhibition
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
                Our school exhibitions showcase the creativity, innovation, and academic excellence of our students. 
                These events provide a platform for students to display their projects, experiments, and artistic 
                creations to the wider school community.
              </motion.p>

              <motion.p variants={itemVariants}>
                We organize various types of exhibitions throughout the academic year, including <strong>science fairs, 
                art exhibitions, technology showcases, and literary displays</strong>. Each exhibition focuses on 
                different aspects of learning and student achievement.
              </motion.p>

              <motion.p variants={itemVariants}>
                The annual Science Exhibition is a highlight of our academic calendar. Students present innovative 
                projects that demonstrate scientific principles and their practical applications. These projects 
                often address real-world problems and propose creative solutions.
              </motion.p>

              <motion.p variants={itemVariants}>
                Exhibitions not only display student work but also develop important skills such as research, 
                presentation, and communication. Students learn to explain their projects to visitors, answer 
                questions, and receive feedback, enhancing their confidence and knowledge.
              </motion.p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Exhibition Cards */}
      <div className="py-16 bg-white">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-[#0D1B46]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Exhibition <span className="text-[#050676]">Categories</span>
        </motion.h2>
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {exhibitionItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md"
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0D1B46] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}