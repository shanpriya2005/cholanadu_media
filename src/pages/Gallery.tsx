import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HoverVideoPlayer from '@/components/HoverVideoPlayer';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Dummy data paths
const images=[
  "https://res.cloudinary.com/degljuqjv/image/upload/v1751041390/img1_cse9ze.jpg",
  "https://res.cloudinary.com/degljuqjv/image/upload/v1751042606/img2_fluoxs.jpg",
"https://res.cloudinary.com/degljuqjv/image/upload/v1751041410/img3_ldwfus.jpg",
  "https://res.cloudinary.com/degljuqjv/image/upload/v1751041429/img4_qc6ry7.jpg",
  "https://res.cloudinary.com/degljuqjv/image/upload/v1751041428/img5_yqrp9h.jpg",
  "https://res.cloudinary.com/degljuqjv/image/upload/v1751041427/img6_o6ikqo.jpg",
  "https://res.cloudinary.com/degljuqjv/image/upload/v1751042645/img7_xfzwie.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041429/img8_r7jhr3.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751042630/img9_gvyczt.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041388/img10_nnqfdp.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041391/img11_pqwre6.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041396/img12_gtie2w.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041398/img13_t2mop1.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041401/img14_ctoq0p.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041403/img15_szrkrd.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041394/img16_qjhmps.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041399/img17_tityju.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751042633/img18_odaxjr.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041399/img19_b9pyqh.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041404/img20_ln0qs5.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041404/img21_qqswwt.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751042634/img22_pg0r9g.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751042636/img23_k6ps2x.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041413/img24_yawwkh.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041421/img25_tkwgyx.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041406/img26_lxgxit.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041407/img27_exmspw.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041411/img28_dfua3y.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041415/img29_rxemkf.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041413/img30_ywxrkz.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041417/img31_csmaej.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041415/img32_zqkuqj.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041421/img33_v1pps2.jpg",
        "https://res.cloudinary.com/degljuqjv/image/upload/v1751041418/img34_t8ofqh.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041422/img35_zty8ym.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041428/img36_nrznbo.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041426/img37_tueqao.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041422/img38_fncxps.jpg",
    "https://res.cloudinary.com/degljuqjv/image/upload/v1751041423/img39_gdank2.jpg"

]
const videos = [
  "https://res.cloudinary.com/degljuqjv/video/upload/v1751040016/video1_dmssiu.mp4",
 "https://res.cloudinary.com/degljuqjv/video/upload/v1751040283/video2_y6yyn2.mp4",
  "https://res.cloudinary.com/degljuqjv/video/upload/v1751043531/video3_1_zmigav.mp4",
  "https://res.cloudinary.com/degljuqjv/video/upload/v1751040641/video4_wfa3lz.mp4",
  "https://res.cloudinary.com/degljuqjv/video/upload/v1751043714/video5_r8ydoq.mp4",
  "https://res.cloudinary.com/degljuqjv/video/upload/v1751041520/video6_cfuhlu.mp4",
  "https://res.cloudinary.com/degljuqjv/video/upload/v1751043119/video7_zksm0l.mp4",
  "https://res.cloudinary.com/degljuqjv/video/upload/v1751040926/video8_ejbtru.mp4",
  "https://res.cloudinary.com/degljuqjv/video/upload/v1751041010/video9_bckq07.mp4",
  "https://res.cloudinary.com/degljuqjv/video/upload/v1751041150/video10_w41lym.mp4",
];


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

              Our Gallery
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
