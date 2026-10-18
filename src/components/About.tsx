import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Heart, ShieldCheck, Smile } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#F6F0E8] relative overflow-hidden"
      aria-label="About Bellzium Family Salon"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition */}
          <motion.div
            className="lg:col-span-5 relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            {/* Offset border accent */}
            <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-[#C8A66A]/30 rotate-2 pointer-events-none" />

            {/* Main Image Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#C8A66A]/30 bg-[#FFFFFF] aspect-[4/5]">
              <img
                src="/images/about-experience.jpg"
                alt="Client consultation in front of elegant mirror at Bellzium Family Salon"
                loading="lazy"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/40 via-transparent to-transparent pointer-events-none" />

              {/* Inset Quote Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#FFFFFF]/95 backdrop-blur-md p-4 rounded-xl border border-[#C8A66A]/30 shadow-md">
                <p className="font-serif italic text-xs sm:text-sm text-[#292522] leading-snug">
                  "Personal style and comfortable care for the entire family in Nagpur."
                </p>
                <p className="text-[10px] font-semibold tracking-widest text-[#C8A66A] uppercase mt-2">
                  BELLZIUM PHILOSOPHY
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Brand Values */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            {/* Category Eyebrow */}
            <div className="inline-flex items-center space-x-2 bg-[#FFFFFF] border border-[#C8A66A]/30 px-3.5 py-1 rounded-full shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8A66A] uppercase">
                Our Story & Space
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#292522] tracking-tight leading-[1.18]">
              {SALON_DATA.business.aboutHeading}
            </h2>

            {/* Core Narrative */}
            <p className="text-base sm:text-lg text-[#292522]/80 leading-relaxed font-normal">
              {SALON_DATA.business.aboutCopy}
            </p>

            <p className="text-sm sm:text-base text-[#292522]/70 leading-relaxed">
              We believe a visit to the salon should be more than a simple haircut or styling appointment—it is your time to unwind, relax, and step out feeling refreshed with confidence.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#C8A66A]/20 w-full">
              <div className="bg-[#FFFFFF]/60 backdrop-blur-xs p-4 rounded-xl border border-[#C8A66A]/20">
                <Heart className="w-5 h-5 text-[#C8A66A] mb-2" />
                <h4 className="font-serif text-sm font-bold text-[#292522] mb-1">Caring Ambiance</h4>
                <p className="text-xs text-[#292522]/70">Thoughtfully created space designed for relaxation.</p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-xs p-4 rounded-xl border border-[#C8A66A]/20">
                <ShieldCheck className="w-5 h-5 text-[#C8A66A] mb-2" />
                <h4 className="font-serif text-sm font-bold text-[#292522] mb-1">Tailored Attention</h4>
                <p className="text-xs text-[#292522]/70">One-on-one style dialogue focused on your needs.</p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-xs p-4 rounded-xl border border-[#C8A66A]/20">
                <Smile className="w-5 h-5 text-[#C8A66A] mb-2" />
                <h4 className="font-serif text-sm font-bold text-[#292522] mb-1">All Ages Welcome</h4>
                <p className="text-xs text-[#292522]/70">Complete comfort for men, women, and kids.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="group inline-flex items-center space-x-3 bg-[#292522] hover:bg-[#C8A66A] text-[#FAF6F0] hover:text-[#292522] px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
