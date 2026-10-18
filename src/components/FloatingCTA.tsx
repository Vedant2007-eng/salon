import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface FloatingCTAProps {
  onBookClick: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onBookClick }) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-[#171717]/95 backdrop-blur-md border-t border-[#C8A66A]/30 shadow-2xl"
      aria-label="Quick Actions"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Quick Call */}
        <a
          href={SALON_DATA.business.phoneTel}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#252525] hover:bg-[#303030] text-[#FAF6F0] border border-[#C8A66A]/30 transition-colors"
          aria-label="Call Bellzium Family Salon"
        >
          <Phone className="w-4 h-4 text-[#C8A66A] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Call Now</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={`https://wa.me/${SALON_DATA.business.whatsappNumber}?text=Hello%20Bellzium%20Family%20Salon,%20I%20would%20like%20to%20enquire%20about%20an%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-700/80 hover:bg-emerald-700 text-[#FAF6F0] border border-emerald-500/40 transition-colors"
          aria-label="Chat on WhatsApp with Bellzium Family Salon"
        >
          <MessageSquare className="w-4 h-4 text-[#FAF6F0] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">WhatsApp</span>
        </a>

        {/* Book Appointment */}
        <button
          onClick={onBookClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#C8A66A] hover:bg-[#D4AF37] text-[#171717] font-bold transition-colors cursor-pointer shadow-sm"
          aria-label="Book an Appointment"
        >
          <Calendar className="w-4 h-4 text-[#171717] mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase">Book Visit</span>
        </button>
      </div>
    </div>
  );
};
