import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HoverVideoPlayer from '@/components/HoverVideoPlayer';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Dummy data paths
const images = Array.from({ length: 34 }, (_, i) => `/images/img${i + 1}.jpg`);
const videos = Array.from({ length: 10 }, (_, i) => `/videos/video${i + 1}.mp4`);

// Scoped scrollbar styles
const scrollbarStyles = `
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
`;

const GalleryPage = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const scrollContainerRef = useRef(null);

  const toggleClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -340, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 340, behavior: 'smooth' });
  };

  return (
    <div className="bg-background text-foreground">
      <style>{scrollbarStyles}</style> {/* Inject hide-scrollbar styles */}

      <Navigation />
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-down">

              Our <span className="bg-gradient-to-r from-[#C28840] to-[#A66C2D] bg-clip-text text-transparent">Gallery</span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-[#C28840] to-[#A66C2D] mx-auto mb-4 rounded-full animate-expand-line"></div>

            <p className="text-xl text-black italic max-w-3xl mx-auto animate-fade-in-up">
  A glimpse into the creative world of Cholanadu Media. Explore our portfolio of stunning visuals and compelling stories.
</p>

          </div>

          {/* Video Section */}
          <section className="mt-16 relative">
            <h2 className="text-3xl font-bold mb-6 text-foreground animate-fade-in-down text-center">
              Videography
            </h2>

            <div className="relative flex items-center">
              {/* Left Arrow */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-yellow-800 hover:bg-yellow-900 text-white p-3 rounded-full transition-transform duration-300 hover:scale-110"
                onClick={scrollLeft}
                aria-label="Scroll left"
              >
                <FaChevronLeft />
              </button>

              {/* Scrollable Videos */}
              <div
                ref={scrollContainerRef}
                className="hide-scrollbar relative overflow-x-auto flex gap-6 px-6 py-4 scroll-smooth snap-x snap-mandatory"
              >
                {videos.map((src, index) => (
                  <div
                    key={index}
                    className="min-w-[400px] max-w-[400px] aspect-video rounded-xl overflow-hidden snap-start shrink-0 bg-muted border border-border hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <HoverVideoPlayer src={src} preload="none" />
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-yellow-800 hover:bg-yellow-900 text-white p-3 rounded-full transition-transform duration-300 hover:scale-110"
                onClick={scrollRight}
                aria-label="Scroll right"
              >
                <FaChevronRight />
              </button>
            </div>
          </section>

          {/* Image Section */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-6 text-foreground animate-fade-in-up text-center">
              Photography
            </h2>

            <div
              className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-3"
              style={{
                columnFill: 'balance',
                orphans: 1,
                widows: 1,
              }}
            >
              {images.map((src, index) => {
                const isClicked = clickedIndex === index;
                const isOtherClicked = clickedIndex !== null && !isClicked;

                return (
                  <div
                    key={index}
                    onClick={() => toggleClick(index)}
                    className={`break-inside-avoid cursor-pointer overflow-hidden rounded-md shadow-md transition-shadow duration-300 mb-3
                      ${isClicked ? 'shadow-xl scale-[1.1] z-10 relative' : ''}
                      ${isOtherClicked ? 'opacity-50' : 'opacity-100'}`}
                    style={{
                      transition: 'all 0.3s ease',
                      pageBreakInside: 'avoid',
                      breakInside: 'avoid',
                    }}
                  >
                    <img
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-300 block"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
