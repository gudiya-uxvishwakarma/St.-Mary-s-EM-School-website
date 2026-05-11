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

// Image imports - make sure these images exist in your public folder
import dancePerformance from '/s1.png';
import musicConcert from '/s2.png';
import dramaPlay from '/s3.png';
import artExhibition from '/s4.png';
import folkDance from '/s5.png';
import poetryRecitation from '/s6.png';

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

const imageVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
    transition: { duration: 0.3 }
  }
};

export default function CulturalActivities() {
  const culturalEvents = [
    {
      id: 1,
      title: "Annual Dance Performance",
      description: "Students showcase classical and contemporary dance forms from different regions.",
      image: dancePerformance
    },
    {
      id: 2,
      title: "Music Concert",
      description: "Our talented musicians perform vocal and instrumental pieces from various genres.",
      image: musicConcert
    },
    {
      id: 3,
      title: "Drama Festival",
      description: "Students stage plays ranging from traditional folk tales to modern adaptations.",
      image: dramaPlay
    },
    {
      id: 4,
      title: "Art Exhibition",
      description: "Display of student artwork including paintings, sculptures, and digital art.",
      image: artExhibition
    },
    {
      id: 5,
      title: "Folk Dance Competition",
      description: "Teams compete performing traditional dances from different states of India.",
      image: folkDance
    },
    {
      id: 6,
      title: "Poetry Recitation",
      description: "Students recite poems in multiple languages, showcasing linguistic diversity.",
      image: poetryRecitation
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
      
      {/* Hero Section */}
      <motion.div 
  className="relative h-[600px] bg-[url('/b.png')] bg-cover bg-center"
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
                Cultural Activities
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
                Cultural activities are an integral part of our school's educational philosophy. We believe that 
                exposure to arts, music, dance, and drama helps students develop creativity, confidence, and a deeper 
                appreciation for diverse cultural expressions.
              </motion.p>

              <motion.p variants={itemVariants}>
                Our school organizes various cultural events throughout the academic year, providing students with 
                opportunities to showcase their talents and learn about different cultural traditions. These activities 
                foster teamwork, discipline, and artistic expression.
              </motion.p>

              <motion.p variants={itemVariants}>
                Students participate in <strong>classical and folk dances, vocal and instrumental music, drama, 
                elocution, and creative arts</strong>. Our dedicated team of cultural instructors guides students 
                in developing their artistic abilities and preparing for performances.
              </motion.p>

              <motion.p variants={itemVariants}>
                Annual cultural festivals celebrate the rich diversity of our cultural heritage. Students perform 
                traditional and contemporary dances, stage plays, and present musical concerts. These events not only 
                entertain but also educate the school community about various cultural traditions.
              </motion.p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Image Grid */}
      <div className="py-16 bg-white">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-[#0D1B46]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Cultural <span className="text-[#050676]">Highlights</span>
        </motion.h2>
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="overflow-hidden rounded-xl shadow-md"
                variants={imageVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div 
                  className="p-4 bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-lg text-[#0D1B46]">{event.title}</h3>
                  <p className="text-gray-600 mt-1">{event.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}