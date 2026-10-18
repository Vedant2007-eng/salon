import React from 'react';
import { Sparkles, Phone, MapPin, Star, Calendar, ArrowUp } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface FooterProps {
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - navHeight, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#171717] text-[#FAF6F0] relative overflow-hidden border-t border-[#2C2C2C]">
      {/* Decorative subtle gold glow */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#C8A66A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#2C2C2C]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <span className="font-serif text-3xl font-bold tracking-[0.2em] text-[#FAF6F0]">
                  BELLZIUM
                </span>
                <Sparkles className="w-4 h-4 text-[#C8A66A]" />
              </div>
              <span className="text-xs font-semibold tracking-[0.3em] text-[#C8A66A] uppercase mt-0.5">
                FAMILY SALON
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF6F0]/70 max-w-sm leading-relaxed mt-2">
              Where Style Meets Self-Care. A welcoming beauty and grooming sanctuary for women, men, and families in Nagpur.
            </p>

            {/* Google Rating Pill */}
            <a
              href={SALON_DATA.business.googleReviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center space-x-2 bg-[#252525] border border-[#C8A66A]/30 hover:border-[#C8A66A] px-3.5 py-2 rounded-xl transition-all"
            >
              <div className="flex items-center text-[#C8A66A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C8A66A] text-[#C8A66A]" />
                ))}
              </div>
              <span className="text-xs text-[#FAF6F0] font-medium">
                4.4/5 ({SALON_DATA.business.googleReviews.totalCount} Google Reviews)
              </span>
            </a>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C8A66A] mb-1">
              Explore Salon
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FAF6F0]/75">
              {SALON_DATA.navLinks.map((link) => {
                const targetId = link.href.replace('#', '');
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(targetId);
                      }}
                      className="hover:text-[#C8A66A] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact & Address Column */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C8A66A] mb-1">
              Visit Us in Nagpur
            </h4>

            <div className="flex items-start space-x-2.5 text-xs text-[#FAF6F0]/75 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#C8A66A] shrink-0 mt-0.5" />
              <span>
                Shop No 4 & 5, Narmada Apartment, Srinagar, Ring Road, opposite Fire Brigade Office, Chatrapati Square, Suyog Nagar, Nagpur 440015
              </span>
            </div>

            <div className="flex items-center space-x-2.5 text-xs text-[#FAF6F0]/75 pt-1">
              <Phone className="w-4 h-4 text-[#C8A66A] shrink-0" />
              <a
                href={SALON_DATA.business.phoneTel}
                className="hover:text-[#C8A66A] font-semibold transition-colors"
              >
                {SALON_DATA.business.phone}
              </a>
            </div>

            <div className="pt-3">
              <button
                onClick={onBookClick}
                className="inline-flex items-center space-x-2 bg-[#C8A66A] hover:bg-[#FAF6F0] text-[#171717] px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF6F0]/50 gap-4">
          <p>
            © {currentYear} Bellzium Family Salon. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <span>Nagpur, Maharashtra, India</span>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-[#C8A66A] hover:text-[#FAF6F0] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
