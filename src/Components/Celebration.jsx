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

const staggerContainerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const celebrationCardVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  },
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
    transition: { duration: 0.3 }
  }
};

export default function Celebration() {
  const highlightImages = [
    { src: "/3moments.png", title: "Annual Day" },
    { src: "/s3.png", title: "Independence Day" },
    { src: "/s5.png", title: "Republic Day" },
    { src: "/a.png", title: "Children's Day" },
    { src: "/f.png", title: "Sports Day" },
    { src: "/s2.png", title: "Graduation Ceremony" }
  ];
  
  const celebrations = [
    {
      title: "Annual Day",
      description: "A grand celebration showcasing student performances across various art forms.",
      month: "December",
      color: "bg-blue-500"
    },
    {
      title: "Independence Day",
      description: "Patriotic celebration with flag hoisting, cultural programs, and speeches.",
      month: "August",
      color: "bg-[#050676]"
    },
    {
      title: "Republic Day",
      description: "Commemorating the adoption of the Constitution with parades and performances.",
      month: "January",
      color: "bg-green-500"
    },
    {
      title: "Children's Day",
      description: "Special activities and performances organized by teachers for students.",
      month: "November",
      color: "bg-purple-500"
    },
    {
      title: "Sports Day",
      description: "Celebrating the athletic prowess of students with various sports events.",
      month: "March",
      color: "bg-red-500"
    },
    {
      title: "Graduation",
      description: "Honoring the achievements of students as they complete their educational journey.",
      month: "May",
      color: "bg-yellow-500"
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
      
      <motion.div 
  className="relative h-[600px] bg-[url('/d.png')] bg-cover bg-center"
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
    <h1 className="text-5xl font-bold text-white">Cultural Activities</h1>
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
                Celebrations
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </motion.div>
      
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-lg text-lg leading-relaxed space-y-6 mb-12"
          >
            <p>
              Celebrations are an important part of our school culture, bringing together students, teachers, 
              and parents to commemorate special occasions, festivals, and achievements. These events create 
              a sense of community and shared joy within our school.
            </p>

            <p>
              We celebrate various national and cultural festivals throughout the year, including <strong>Independence 
              Day, Republic Day, Teachers' Day, Children's Day, and major religious festivals</strong>. These 
              celebrations help students understand and appreciate our diverse cultural heritage.
            </p>

            <p>
              Annual Day is one of our most anticipated celebrations, featuring performances by students across 
              different grades. This grand event showcases the talents and achievements of our students in various 
              fields, from academics to performing arts.
            </p>

            <p>
              Sports Day celebrations highlight the physical prowess and sportsmanship of our students. The event 
              includes track and field competitions, team sports, and displays of physical fitness, fostering a 
              spirit of healthy competition and teamwork.
            </p>

            <p>
              Graduation ceremonies mark important milestones in our students' educational journey. These dignified 
              celebrations honor the achievements of graduating students and inspire them to pursue excellence in 
              their future endeavors.
            </p>

            <p>
              Through these celebrations, students learn important values such as respect for diversity, appreciation 
              for cultural traditions, and the joy of collective achievement. They also develop organizational skills, 
              creativity, and a sense of responsibility by participating in the planning and execution of these events.
            </p>
          </motion.div>
        </ScrollReveal>
        
        {/* Celebration Cards */}
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-[#0D1B46]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our <span className="text-[#050676]">Celebrations</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {celebrations.map((celebration, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md"
              variants={celebrationCardVariants}
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <div className={`h-2 ${celebration.color}`}></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-[#0D1B46]">{celebration.title}</h3>
                  <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                    {celebration.month}
                  </span>
                </div>
                <p className="text-gray-600">{celebration.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <motion.div 
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
  initial="initial"
  whileInView="animate"
  variants={staggerContainerVariants}
  viewport={{ once: true }}
>
  {highlightImages.map((img, index) => (
    <motion.div
      key={index}
      className="rounded-lg overflow-hidden shadow-md bg-white"
      variants={itemVariants}
    >
      <img 
        src={img.src} 
        alt={img.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-[#0D1B46]">{img.title}</h3>
      </div>
    </motion.div>
  ))}
</motion.div>


      <Footer />
    </motion.div>
  );
}
