import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Maximize2 } from 'lucide-react';
import { SALON_DATA, type GalleryItem } from '../data/salonData';
import { LightboxModal } from './LightboxModal';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Showcase' },
    { id: 'hair', label: 'Hair & Styling' },
    { id: 'color', label: 'Colouring' },
    { id: 'skincare', label: 'Skin & Spa' },
    { id: 'interior', label: 'Ambiance' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? SALON_DATA.gallery
      : SALON_DATA.gallery.filter((item) => {
          if (activeCategory === 'hair') return item.category === 'hair' || item.category === 'styling';
          if (activeCategory === 'color') return item.category === 'color';
          if (activeCategory === 'skincare') return item.category === 'skincare' || item.categoryLabel.includes('Spa');
          if (activeCategory === 'interior') return item.category === 'interior';
          return true;
        });

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev ?? 0) === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-[#F6F0E8] relative border-t border-[#C8A66A]/20"
      aria-label="Salon Gallery and Styling Inspiration"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#FFFFFF] border border-[#C8A66A]/30 px-3.5 py-1 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8A66A] uppercase">
              Styling Inspiration
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#292522] tracking-tight mb-4">
            The Art of Looking Good
          </h2>

          <p className="text-base sm:text-lg text-[#292522]/75 leading-relaxed font-normal">
            A glimpse into salon ambiance, haircare transformations, and beauty moments.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#292522] text-[#FAF6F0] border-[#292522] shadow-sm'
                    : 'bg-[#FFFFFF] text-[#292522]/70 border-[#C8A66A]/30 hover:border-[#C8A66A] hover:text-[#292522]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredItems.map((item: GalleryItem, index: number) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#C8A66A]/25 shadow-xs hover:shadow-xl transition-all duration-300 aspect-[4/3] cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/85 via-[#171717]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5">
                <div className="flex justify-between items-start">
                  <span className="bg-[#C8A66A] text-[#171717] text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full">
                    {item.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FFFFFF]/20 backdrop-blur-xs flex items-center justify-center text-[#FAF6F0]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#FAF6F0] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#FAF6F0]/80 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Dialog */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        item={lightboxIndex !== null ? filteredItems[lightboxIndex] : null}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={lightboxIndex ?? 0}
        totalCount={filteredItems.length}
      />
    </section>
  );
};
