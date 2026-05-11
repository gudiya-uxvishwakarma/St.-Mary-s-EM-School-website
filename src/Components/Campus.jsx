import React from 'react';
import { motion } from 'framer-motion';
import Nav from './Nav';
import Footer from './Footer';
import { ScrollReveal } from './ScrollReveal';
import name from './../assets/kreedo.png';
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

const featureCardVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
    transition: { duration: 0.3 }
  }
};

export default function Campus() {
  const features = [
    {
      title: "Child-Friendly Environment",
      description: "Colorful classrooms, child-sized furniture, and engaging learning spaces designed for young learners.",
      icon: "👶"
    },
    {
      title: "Qualified Teachers",
      description: "Experienced educators specialized in early childhood education with a nurturing approach.",
      icon: "👩‍🏫"
    },
    {
      title: "Play-Based Learning",
      description: "Curriculum that incorporates play as a fundamental learning tool for cognitive development.",
      icon: "🧩"
    },
    {
      title: "Safety Measures",
      description: "Comprehensive safety protocols, CCTV surveillance, and trained staff for complete peace of mind.",
      icon: "🛡️"
    },
    {
      title: "Outdoor Activities",
      description: "Spacious playgrounds with age-appropriate equipment for physical development and recreation.",
      icon: "🏞️"
    },
    {
      title: "Creative Arts",
      description: "Regular music, dance, and art activities to nurture creativity and self-expression.",
      icon: "🎨"
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

      {/* Hero Image with Sliding Background Effect */}
      <motion.div
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${name})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white">Nursery Section</h1>
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
              <BreadcrumbLink className="text-xl font-semibold text-black">
                Nursery Section
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#0D1B46]">Nursery Section</h1>
          <p className="mt-2 text-lg md:text-xl font-medium text-gray-600">
            We Provide High Quality Care & Education for Children.
          </p>
        </motion.div>

        <ScrollReveal>
          <div className="bg-white p-8 rounded-xl shadow-lg text-lg leading-relaxed space-y-6 mb-12">
            <motion.p variants={itemVariants}>
              Our Nursery Section is designed to provide a nurturing and stimulating environment for children
              in their formative years. We understand that early childhood education lays the foundation for
              lifelong learning and development.
            </motion.p>

            <motion.p variants={itemVariants}>
              Our curriculum is carefully crafted to balance academic learning with play-based activities,
              ensuring that children develop cognitive, social, emotional, and physical skills in a holistic manner.
            </motion.p>

            <motion.p variants={itemVariants}>
              We believe in creating a second home for our little learners, where they feel safe, loved, and
              encouraged to explore their curiosities. Our classrooms are colorful, spacious, and equipped with
              age-appropriate learning materials and toys.
            </motion.p>

            <motion.p variants={itemVariants}>
              Our qualified and experienced teachers are passionate about early childhood education and are
              trained to identify and nurture each child's unique potential. They maintain regular communication
              with parents to ensure a collaborative approach to the child's development.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="py-12">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-[#0D1B46]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="text-[#050676]">Features</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                variants={featureCardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{feature.icon}</span>
                  <h3 className="text-xl font-semibold text-[#0D1B46]">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
