import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Content() {
  const scrollRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
      behavior: "smooth",
    });
  };

  const galleryImages = ['/gallery 1.png', '/gallery 2.png', '/gallery 3.png', '/gallery 4.png'];
  const BannerImages = ['/banner 1.png', '/banner 2.png', '/banner 3.png'];


  return (
    <div className="relative">
      <div className="relative">
        {/* Scrollable Image Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar w-full h-[60vh] md:h-[80vh]"
        >

          {BannerImages.map((src, i) => (
            <div key={i} className="min-w-full snap-center flex-shrink-0">
              <motion.img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
        >
          <ChevronRight size={24} />
        </button>
      </div>


      {/* School Intro & Info */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-4 py-8 md:px-12 lg:px-20 max-w-7xl mx-auto space-y-8 text-gray-800"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0D1B46]">Welcome to St. Mary's EM School</h1>
          <p className="text-lg md:text-2xl font-medium text-[#050676]">Nurturing Excellence, Inspiring Futures</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-lg shadow-lg border-l-4 border-[#050676]">
          <p className="text-justify leading-relaxed text-base md:text-lg">
            St. Mary's EM School, an esteemed English Medium School affiliated to the State Board, stands as a beacon of
            educational excellence catering to the diverse learning needs of children across all strata of society.
            Founded with the profound vision of providing <span className="font-semibold text-[#0D1B46]">"Quality Education to Young Minds"</span>,
            our institution has been transforming lives for more than three decades. We take pride in our exceptional track record
            of fostering holistic development, academic brilliance, and character building that prepares students not just for
            examinations, but for life's greater challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "01. Experiential Learning",
              desc: "Our monthly outings provide students with immersive 'Seeing & Learning' experiences that transform theoretical knowledge into practical understanding and real-world skills.",
              icon: "🌍"
            },
            {
              title: "02. Talent Development",
              desc: "We provide specialized platforms for competitions in dance, drama, art, music, chess, taekwondo, abacus, vedicmaths and more, designed to discover and nurture the unique talents and creative potential in every child.",
              icon: "🎭"
            },
            {
              title: "03. Academic Excellence",
              desc: "Our consistent record of achieving the highest pass percentages and maximum distinctions among children stands as a testament to our commitment to academic rigor and excellence.",
              icon: "🏆"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white border p-6 rounded-lg shadow-md hover:shadow-lg transition group"
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{item.icon}</span>
                <h2 className="text-xl font-bold text-[#0D1B46] group-hover:text-[#050676] transition">{item.title}</h2>
              </div>
              <p className="text-base text-justify text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-gray-100 py-10 px-4 md:px-12"
      >
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#0D1B46] mb-6">School Moments Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-40 md:h-60 object-cover rounded-lg shadow transition duration-300"
                onClick={() => setSelectedImage(img)}
              />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          >
            <div className="relative max-w-full max-h-full">
              <button
                className="absolute top-2 right-2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <img
                src={selectedImage}
                alt="Enlarged"
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
              />
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Admission Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-blue-50 mt-10 p-6 rounded-lg shadow-md max-w-5xl mx-auto text-center space-y-4"
      >
        <p className="text-lg md:text-xl font-medium text-gray-700">
          Admission to St. Mary's EM School is based on vacancy. Registration is open for classes Nursery to Grade 10.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="bg-[#050676] text-white px-6 py-2 rounded-md hover:bg-[#adefee] transition"
        >
          Join Our School
        </button>
      </motion.div>
    </div>
  );
}
