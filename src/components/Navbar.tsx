import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sparkles } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple spy for active section
      const sections = ['home', 'services', 'about', 'why-us', 'reviews', 'gallery', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6F0E8]/95 backdrop-blur-md shadow-sm border-b border-[#C8A66A]/20 py-3'
          : 'bg-[#F6F0E8]/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="group flex flex-col items-start focus:outline-none"
            aria-label="Bellzium Family Salon Home"
          >
            <div className="flex items-center space-x-1.5">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#292522] group-hover:text-[#C8A66A] transition-colors">
                BELLZIUM
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#C8A66A] opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.28em] text-[#C8A66A] uppercase">
              FAMILY SALON
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {SALON_DATA.navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(targetId);
                  }}
                  className={`text-sm font-medium tracking-wider transition-colors relative py-1 ${
                    isActive ? 'text-[#292522] font-semibold' : 'text-[#292522]/70 hover:text-[#C8A66A]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A66A] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={SALON_DATA.business.phoneTel}
              className="inline-flex items-center space-x-2 text-xs font-medium text-[#292522] hover:text-[#C8A66A] px-3 py-2 rounded-full border border-[#C8A66A]/30 hover:border-[#C8A66A] transition-all"
              title="Call Bellzium Family Salon"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A66A]" />
              <span>{SALON_DATA.business.phone}</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center space-x-2 bg-[#292522] hover:bg-[#C8A66A] text-[#FAF6F0] hover:text-[#292522] text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={SALON_DATA.business.phoneTel}
              className="p-2 text-[#292522] rounded-full border border-[#C8A66A]/40 hover:bg-[#C8A66A]/10 transition-colors"
              aria-label="Call salon"
            >
              <Phone className="w-4 h-4 text-[#C8A66A]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#292522] hover:text-[#C8A66A] focus:outline-none rounded-lg"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-b border-[#C8A66A]/20 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pb-4">
            {SALON_DATA.navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(targetId);
                  }}
                  className={`text-base font-medium px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#C8A66A]/15 text-[#292522] font-semibold'
                      : 'text-[#292522]/80 hover:bg-[#C8A66A]/10 hover:text-[#292522]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-[#C8A66A]/20 flex flex-col space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center space-x-2 bg-[#292522] text-[#FAF6F0] text-xs uppercase tracking-widest font-semibold py-3 rounded-full shadow hover:bg-[#C8A66A] hover:text-[#292522] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </button>

            <a
              href={SALON_DATA.business.phoneTel}
              className="w-full flex items-center justify-center space-x-2 border border-[#C8A66A] text-[#292522] text-xs uppercase tracking-widest font-semibold py-2.5 rounded-full hover:bg-[#C8A66A]/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C8A66A]" />
              <span>Call {SALON_DATA.business.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
