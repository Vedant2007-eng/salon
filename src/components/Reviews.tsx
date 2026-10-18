import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const Reviews: React.FC = () => {
  const { rating, totalCount, url } = SALON_DATA.business.googleReviews;

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-[#FAF6F0] relative border-t border-[#C8A66A]/20"
      aria-label="Customer Reviews for Bellzium Family Salon"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#FFFFFF] border border-[#C8A66A]/30 px-3.5 py-1 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8A66A] uppercase">
              Verified Feedback
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#292522] tracking-tight mb-4">
            Loved by Our Customers
          </h2>

          <p className="text-base sm:text-lg text-[#292522]/75 leading-relaxed font-normal">
            Real experiences from families and clients who visit our salon on Ring Road, Nagpur.
          </p>
        </div>

        {/* Hero Review Summary Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 border border-[#C8A66A]/30 shadow-xl relative overflow-hidden"
        >
          {/* Subtle gold decorative backdrop accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8A66A]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Rating Big Numbers */}
            <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-[#C8A66A]/20 pb-8 md:pb-0 md:pr-8">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#C8A66A] mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                VERIFIED GOOGLE RATING
              </span>
              
              <div className="flex items-baseline space-x-2">
                <span className="font-serif text-6xl sm:text-7xl font-bold text-[#292522]">
                  {rating}
                </span>
                <span className="text-2xl text-[#292522]/40 font-serif">/ 5.0</span>
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1.5 my-3 text-[#C8A66A]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < 4
                        ? 'fill-[#C8A66A] text-[#C8A66A]'
                        : 'fill-[#C8A66A]/60 text-[#C8A66A]'
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm font-semibold text-[#292522] mt-1">
                Based on <span className="text-[#C8A66A]">{totalCount} Google Reviews</span>
              </p>

              <p className="text-xs text-[#292522]/60 mt-1">
                Aggregated public rating on Google Maps
              </p>
            </div>

            {/* Right Information & CTA */}
            <div className="md:col-span-7 flex flex-col items-center md:items-start space-y-5 text-center md:text-left">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#292522]">
                  Trusted by 400+ Clients Across Nagpur
                </h3>
                <p className="text-sm text-[#292522]/75 leading-relaxed">
                  We take pride in delivering welcoming service, careful attention to personal style, and a comfortable atmosphere for families. Browse all genuine client ratings and photos directly on our official Google Maps profile.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-3 bg-[#292522] hover:bg-[#C8A66A] text-[#FAF6F0] hover:text-[#292522] px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow hover:shadow-md"
                >
                  <span>Read Google Reviews</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <p className="text-[11px] text-[#292522]/50 italic">
                *Opens Bellzium Family Salon reviews on Google Maps in a new tab.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
