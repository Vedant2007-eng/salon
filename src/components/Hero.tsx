import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Calendar, Sparkles, MapPin } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F6F0E8]"
      aria-label="Welcome to Bellzium Family Salon"
    >
      {/* Decorative Subtle Background Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C8A66A]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D9B8AE]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Editorial Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-[#FFFFFF]/80 backdrop-blur-sm border border-[#C8A66A]/40 px-3.5 py-1.5 rounded-full shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#292522] uppercase">
                {SALON_DATA.business.eyebrow}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-[#292522] leading-[1.12] tracking-tight"
            >
              Where Style <br />
              <span className="italic font-normal font-serif text-[#C8A66A] relative inline-block">
                Meets Self-Care.
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C8A66A] to-transparent opacity-60" />
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-[#292522]/80 max-w-xl leading-relaxed font-normal"
            >
              {SALON_DATA.business.heroDescription}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2"
            >
              <button
                onClick={onBookClick}
                className="group inline-flex items-center justify-center space-x-3 bg-[#292522] hover:bg-[#C8A66A] text-[#FAF6F0] hover:text-[#292522] px-7 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C8A66A] group-hover:text-[#292522] transition-colors" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-[#FAF6F0] text-[#292522] border border-[#292522]/30 hover:border-[#C8A66A] px-6 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>
            </motion.div>

            {/* Compact Verified Social-Proof Element */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-[#C8A66A]/20 w-full"
            >
              {/* Rating Card */}
              <a
                href={SALON_DATA.business.googleReviews.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 bg-[#FFFFFF] hover:bg-[#FAF6F0] border border-[#C8A66A]/30 px-3.5 py-2 rounded-xl transition-all shadow-xs hover:shadow-sm group"
                title="View reviews on Google Maps"
              >
                <div className="flex items-center text-[#C8A66A]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? 'fill-[#C8A66A] text-[#C8A66A]'
                          : 'fill-[#C8A66A]/50 text-[#C8A66A]'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-xs text-[#292522] font-medium">
                  <span className="font-bold text-[#292522]">4.4/5</span>
                  <span className="text-[#292522]/60 mx-1.5">|</span>
                  <span className="group-hover:text-[#C8A66A] transition-colors">417 Google reviews</span>
                </div>
              </a>

              {/* Location Badge */}
              <div className="inline-flex items-center space-x-1.5 text-xs text-[#292522]/70">
                <MapPin className="w-3.5 h-3.5 text-[#C8A66A]" />
                <span>Ring Road, Suyog Nagar, Nagpur</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Editorial Visual Showcase */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main Luxury Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Gold decorative offset frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl sm:rounded-[2rem] border border-[#C8A66A]/40 -rotate-1 pointer-events-none" />
              
              {/* Image Container with arched aesthetic */}
              <div className="relative rounded-2xl sm:rounded-[1.75rem] overflow-hidden shadow-2xl bg-[#FFFFFF] border border-[#C8A66A]/30 aspect-[4/3] lg:aspect-[4/5] object-cover">
                <img
                  src="/images/hero-salon.jpg"
                  alt="Bellzium Family Salon luxury interior styling stations with gold arched mirrors and warm ivory chairs"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  fetchPriority="high"
                />

                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/40 via-transparent to-transparent pointer-events-none" />

                {/* Bottom floating brand badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#FFFFFF]/90 backdrop-blur-md p-4 rounded-xl border border-[#C8A66A]/30 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] tracking-widest uppercase font-semibold text-[#C8A66A]">
                        FAMILY SALON • NAGPUR
                      </p>
                      <p className="font-serif text-sm sm:text-base font-bold text-[#292522]">
                        Bellzium Family Salon
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#171717] text-[#C8A66A] flex items-center justify-center font-serif text-sm font-bold shadow-xs">
                      B
                    </div>
                  </div>
                </div>
              </div>

              {/* Small floating tag */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#FFFFFF] border border-[#C8A66A]/40 shadow-md px-3.5 py-2 rounded-full items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-medium tracking-wide text-[#292522]">
                  Welcoming Appointments
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
