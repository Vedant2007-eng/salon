import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, HeartHandshake, MapPin } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C8A66A]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#C8A66A]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#C8A66A]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#C8A66A]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C8A66A]" />;
    }
  };

  return (
    <section
      id="why-us"
      className="py-20 md:py-28 bg-[#171717] text-[#FAF6F0] relative overflow-hidden"
      aria-label="Why Choose Bellzium Family Salon"
    >
      {/* Decorative Gold Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8A66A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C8A66A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#252525] border border-[#C8A66A]/30 px-3.5 py-1 rounded-full mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8A66A] uppercase">
              Our Core Commitments
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF6F0] tracking-tight mb-4">
            Designed for Your Comfort
          </h2>

          <p className="text-base sm:text-lg text-[#FAF6F0]/70 leading-relaxed font-normal">
            Every detail at Bellzium Family Salon is intended to make your beauty and grooming routine effortless and enjoyable.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SALON_DATA.whyChooseUs.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#202020] rounded-2xl p-6 sm:p-7 border border-[#C8A66A]/20 hover:border-[#C8A66A]/70 transition-all duration-300 hover:shadow-xl hover:shadow-[#C8A66A]/5 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#2A2A2A] border border-[#C8A66A]/30 flex items-center justify-center mb-6 group-hover:scale-108 group-hover:border-[#C8A66A] transition-all duration-300">
                  {getIcon(feature.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#FAF6F0] group-hover:text-[#C8A66A] transition-colors mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#FAF6F0]/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Gold Accent Underline */}
              <div className="mt-6 pt-4 border-t border-[#2C2C2C] flex items-center justify-between">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#C8A66A]/80">
                  0{idx + 1}
                </span>
                <span className="w-8 h-[1px] bg-[#C8A66A]/40 group-hover:w-12 group-hover:bg-[#C8A66A] transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
