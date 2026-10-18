import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import type { GalleryItem } from '../data/salonData';

interface LightboxModalProps {
  isOpen: boolean;
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalCount: number;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  item,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171717]/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Preview"
    >
      {/* Lightbox Content Container */}
      <div
        className="relative max-w-4xl w-full bg-[#202020] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C8A66A]/40 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#2C2C2C] bg-[#171717]">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#C8A66A]" />
            <span className="text-xs font-semibold tracking-wider text-[#C8A66A] uppercase">
              {item.categoryLabel} ({currentIndex + 1} of {totalCount})
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#FAF6F0]/70 hover:text-[#FAF6F0] hover:bg-[#2C2C2C] rounded-full transition-colors cursor-pointer"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-[#101010] flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-contain"
          />

          {/* Prev Button */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#171717]/80 hover:bg-[#C8A66A] text-[#FAF6F0] hover:text-[#292522] border border-[#C8A66A]/30 transition-all cursor-pointer shadow-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#171717]/80 hover:bg-[#C8A66A] text-[#FAF6F0] hover:text-[#292522] border border-[#C8A66A]/30 transition-all cursor-pointer shadow-md"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer Details */}
        <div className="p-5 sm:p-6 bg-[#202020] border-t border-[#2C2C2C]">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FAF6F0] mb-1">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/75 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
