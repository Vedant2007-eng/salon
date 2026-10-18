import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';
import { SALON_DATA, type ServiceItem } from '../data/salonData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#FAF6F0] relative border-t border-[#C8A66A]/20"
      aria-label="Our Beauty and Grooming Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#FFFFFF] border border-[#C8A66A]/30 px-3.5 py-1 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8A66A] uppercase">
              Curated Offerings
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#292522] tracking-tight mb-4">
            Your Style, Our Craft
          </h2>

          <p className="text-base sm:text-lg text-[#292522]/75 leading-relaxed font-normal">
            Explore beauty and grooming services for your personal style.
          </p>

          <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-[#292522]/60">
            <HelpCircle className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span>Specific services & custom treatments can be tailored upon consultation.</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {SALON_DATA.services.map((service: ServiceItem, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#C8A66A]/25 hover:border-[#C8A66A] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Zoom effect */}
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F6F0E8]">
                  <img
                    src={service.image}
                    alt={`${service.title} at Bellzium Family Salon`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-sm text-[10px] font-semibold tracking-wider uppercase text-[#292522] px-2.5 py-1 rounded-full border border-[#C8A66A]/30">
                    {service.category}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-xl font-bold text-[#292522] group-hover:text-[#C8A66A] transition-colors mb-1.5">
                    {service.title}
                  </h3>

                  <p className="text-xs font-medium text-[#C8A66A] tracking-wide uppercase mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#292522]/75 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Feature Highlights */}
                  <ul className="space-y-1.5 border-t border-[#F6F0E8] pt-3 mb-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-2 text-xs text-[#292522]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A66A] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#292522] hover:text-[#C8A66A] py-2.5 px-3 rounded-xl bg-[#FAF6F0] hover:bg-[#F6F0E8] border border-[#C8A66A]/30 transition-all cursor-pointer"
                >
                  <span>Enquire Service</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C8A66A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Service Note Banner */}
        <div className="mt-14 bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#C8A66A]/30 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#292522] mb-1">
              Looking for a custom style or special occasion package?
            </h4>
            <p className="text-xs sm:text-sm text-[#292522]/70">
              Our salon specialists will happily discuss your exact preferences, hair length, and needs before any appointment.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Custom Consultation')}
            className="inline-flex items-center space-x-2 bg-[#292522] hover:bg-[#C8A66A] text-[#FAF6F0] hover:text-[#292522] text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shadow cursor-pointer shrink-0"
          >
            <span>Request Consultation</span>
          </button>
        </div>

      </div>
    </section>
  );
};
