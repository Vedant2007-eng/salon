import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Copy, Check, ExternalLink, Sparkles, Navigation } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_DATA.business.address.full).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Shop No 4 & 5, Narmada Apartment, Srinagar, Ring Road, opposite Fire Brigade Office, Chatrapati Square, Suyog Nagar, Nagpur, Maharashtra 440015'
  )}`;

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#F6F0E8] relative border-t border-[#C8A66A]/20"
      aria-label="Location and Contact Information"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center space-x-2 bg-[#FFFFFF] border border-[#C8A66A]/30 px-3.5 py-1 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8A66A] uppercase">
              Location & Details
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#292522] tracking-tight mb-4">
            Come Visit Us
          </h2>

          <p className="text-base sm:text-lg text-[#292522]/75 leading-relaxed font-normal">
            Conveniently situated on Ring Road opposite the Fire Brigade Office in Nagpur.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Address, Phone & Contact CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            {/* Salon Details Card */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#C8A66A]/30 shadow-md">
              <div className="border-b border-[#C8A66A]/20 pb-5 mb-5">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#C8A66A]">
                  ESTABLISHED SALON • NAGPUR
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#292522] mt-1">
                  Bellzium Family Salon
                </h3>
                <p className="text-xs text-[#292522]/60 mt-0.5">
                  Complete Beauty & Grooming Services
                </p>
              </div>

              {/* Address Box */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#C8A66A]/30 flex items-center justify-center shrink-0 text-[#C8A66A] mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A66A]">
                      Address
                    </h4>
                    <p className="text-sm text-[#292522] font-medium mt-1 leading-snug">
                      Shop No 4 & 5, Narmada Apartment, Srinagar, Ring Road
                    </p>
                    <p className="text-xs text-[#292522]/70 mt-1 leading-relaxed">
                      Opposite Fire Brigade Office, Chatrapati Square, Suyog Nagar, Nagpur, Maharashtra 440015
                    </p>

                    {/* Copy Address Button */}
                    <button
                      onClick={handleCopyAddress}
                      className="mt-3 inline-flex items-center space-x-1.5 text-xs font-semibold text-[#292522] hover:text-[#C8A66A] py-1.5 px-3 rounded-lg bg-[#FAF6F0] border border-[#C8A66A]/30 hover:border-[#C8A66A] transition-all cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Address Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#C8A66A]" />
                          <span>Copy Full Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone Link */}
                <div className="flex items-start space-x-3.5 pt-4 border-t border-[#F6F0E8]">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#C8A66A]/30 flex items-center justify-center shrink-0 text-[#C8A66A] mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A66A]">
                      Direct Telephone
                    </h4>
                    <a
                      href={SALON_DATA.business.phoneTel}
                      className="text-base sm:text-lg font-bold text-[#292522] hover:text-[#C8A66A] transition-colors mt-0.5 block"
                    >
                      {SALON_DATA.business.phone}
                    </a>
                    <p className="text-xs text-[#292522]/60 mt-0.5">
                      Tap to call directly from your device
                    </p>
                  </div>
                </div>

                {/* WhatsApp Link */}
                <div className="flex items-start space-x-3.5 pt-4 border-t border-[#F6F0E8]">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-600 mt-0.5">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                      WhatsApp Enquiry
                    </h4>
                    <a
                      href={`https://wa.me/${SALON_DATA.business.whatsappNumber}?text=Hello%20Bellzium%20Family%20Salon,%20I%20have%20an%20enquiry.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#292522] hover:text-emerald-600 transition-colors mt-0.5 block"
                    >
                      Chat on WhatsApp (+91 94228 23232)
                    </a>
                    <p className="text-xs text-[#292522]/60 mt-0.5">
                      Fast response for queries and bookings
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#C8A66A]/20 flex flex-col sm:flex-row gap-3">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#292522] hover:bg-[#C8A66A] text-[#FAF6F0] hover:text-[#292522] py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all shadow-xs cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#C8A66A]" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={SALON_DATA.business.googleReviews.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 border border-[#C8A66A] hover:bg-[#C8A66A]/10 text-[#292522] px-5 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-[#C8A66A]" />
                  <span>Open Maps</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Interactive Embed & Destination verification */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-4"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#C8A66A]/30 bg-[#FFFFFF] aspect-[4/3] sm:aspect-[16/10] w-full">
              {/* Responsive Google Maps Iframe */}
              <iframe
                title="Bellzium Family Salon Location Map in Nagpur"
                src={SALON_DATA.business.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[0.1] contrast-[1.05]"
              />

              {/* Floating overlay chip */}
              <div className="absolute top-4 left-4 bg-[#FFFFFF]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#C8A66A]/30 shadow-md">
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#C8A66A]">
                  LANDMARK
                </p>
                <p className="text-xs font-semibold text-[#292522]">
                  Opposite Fire Brigade Office, Ring Road
                </p>
              </div>
            </div>

            {/* Honest verification note */}
            <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#C8A66A]/20 flex items-center justify-between text-xs text-[#292522]/70">
              <span>
                📍 Located at Shop No 4 & 5, Narmada Apartment, Chatrapati Square / Suyog Nagar, Nagpur.
              </span>
              <a
                href={SALON_DATA.business.googleReviews.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#C8A66A] hover:underline flex items-center gap-1 shrink-0 ml-2"
              >
                View on Google <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
