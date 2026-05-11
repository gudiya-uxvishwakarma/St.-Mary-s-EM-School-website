import { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';

const galleryItems = [
  { type: 'image', src: '/gallery 1.png' },
  { type: 'image', src: '/gallery 2.png' },
  { type: 'image', src: '/gallery 3.png' },
  { type: 'image', src: '/gallery 4.png' },
  { type: 'image', src: '/gallery 5.png' },
  { type: 'image', src: '/gallery 6.png' },
  { type: 'image', src: '/gallery 7.png' },
  { type: 'image', src: '/gallery 8.png' },
  { type: 'image', src: '/gallery 9.png' },
  { type: 'image', src: '/gallery 10.png' },
  { type: 'video', src: '/video 1.mp4' },
  { type: 'video', src: '/video 2.mp4' },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      
      {/* Hero Section */}
      <div className="relative">
        <div
          className="w-full h-[550px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/banner 1.png')`,
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              School Gallery
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="aspect-square flex items-center justify-center bg-gray-100">
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeModal}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-[#050676] transition-colors z-10"
            >
              ✕
            </button>
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.src}
                alt="Full size gallery"
                className="w-full h-full object-contain"
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                className="w-full h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
