import React from 'react';
import { motion } from 'framer-motion';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Nav from './Nav';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function VisionMission() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Nav />

      {/* Hero Image */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div
          style={{
            backgroundImage: `url(${name})`,
            height: "350px",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="my-10 mx-4 md:mx-20">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
                  <Link to="/about" className="text-xl font-semibold text-black">About</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-wrap justify-between items-start gap-10 px-4 md:px-10 py-8">
          {/* Image Column */}
          <motion.div
            className="flex flex-col gap-20 mt-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={a1}
              alt="EYP"
              className="h-[25rem] w-[25rem] object-cover rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src={a2}
              alt="Campus"
              className="h-[25rem] w-[25rem] object-cover rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="max-w-4xl text-[#0D1B46] text-xl font-normal space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Vision */}
            <div>
              <h2 className="text-4xl font-bold mb-4">Vision</h2>
              <p className="text-[22px] leading-snug">
                TO BE THE FOREMOST AND MOST SOUGHT-AFTER EDUCATION PROVIDER IN CBSE, IB AND CAMBRIDGE PROGRAMMES ACROSS ALL DISTRICTS OF TAMILNADU, ESTABLISHING A PAN-INDIA AND WORLDWIDE PRESENCE BY OFFERING EXTRAORDINARY EDUCATION, EXPOSURE AND EXPERIENCE.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-4xl font-bold mb-4">Mission</h2>
              <ul className="list-disc space-y-2 leading-snug ml-6">
                <li>Deliver an infrastructure that is on par with global standards, conducive for collaborative learning and performing.</li>
                <li>Provide an open, happy and secure environment where all stakeholders are treated with care and respect.</li>
                <li>Ensure curriculum is rigorous and engaging, focusing on knowledge, skills, and real-life application.</li>
                <li>Support all levels of learners by setting high expectations and tracking documented progress.</li>
                <li>Create opportunities for children and teachers to grow their confidence, knowledge, and skills beyond the written curriculum.</li>
                <li>Achieve 3E’s – Extraordinary Education, Extraordinary Exposure & Extraordinary Experience to compete globally.</li>
              </ul>
            </div>

            {/* Philosophy */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Philosophy</h2>
              <p className="mb-4 leading-snug">
                We facilitate a safe, friendly, and constructive school climate where stakeholders can express themselves and learn to live virtuously. Every child is unique and learns better in a happy state of mind.
              </p>
              <p className="mb-4 leading-snug">
                Our learning engagements aim to build confidence and lifelong learning through interdisciplinary academic integration, leading to meaningful actions.
              </p>
              <p className="mb-4 leading-snug">
                We offer a balanced and dynamic curriculum that is constantly reviewed for student-centered improvement. We promote research-oriented thinking to address global issues and contribute to a brighter world.
              </p>
              <p className="leading-snug">
                Children are encouraged to explore, learn, and grow through various opportunities. We recognize individual strengths and inspire them to challenge themselves, grow responsibly, and follow their passions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
