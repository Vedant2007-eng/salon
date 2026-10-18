import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MessageSquare, CheckCircle, Calendar, Clock, User, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface BookingSectionProps {
  initialService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialService }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [message, setMessage] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initial service if passed from Services section
  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // Tomorrow's date as min date
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name should be at least 2 characters';
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!service) {
      newErrors.service = 'Please choose a preferred service';
    }

    if (!date) {
      newErrors.date = 'Please pick a preferred date';
    }

    if (!timeSlot) {
      newErrors.timeSlot = 'Please select a preferred time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructWhatsAppUrl = () => {
    const text = `Hello Bellzium Family Salon! 👋%0A%0AI would like to enquire about an appointment:%0A• *Name:* ${encodeURIComponent(fullName)}%0A• *Phone:* ${encodeURIComponent(phone)}%0A• *Service:* ${encodeURIComponent(service)}%0A• *Preferred Date:* ${encodeURIComponent(date)}%0A• *Preferred Time:* ${encodeURIComponent(timeSlot)}${message ? `%0A• *Notes:* ${encodeURIComponent(message)}` : ''}%0A%0APlease let me know if this slot is available. Thank you!`;
    return `https://wa.me/${SALON_DATA.business.whatsappNumber}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);
    // Open WhatsApp in new tab
    const waUrl = constructWhatsAppUrl();
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setService('');
    setDate('');
    setTimeSlot('');
    setMessage('');
    setErrors({});
  };

  return (
    <section
      id="booking"
      className="py-20 md:py-28 bg-[#FAF6F0] relative border-t border-[#C8A66A]/20"
      aria-label="Appointment Enquiry Form"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#FFFFFF] border border-[#C8A66A]/30 px-3.5 py-1 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8A66A] uppercase">
              Schedule Your Visit
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#292522] tracking-tight mb-4">
            Ready for Your Next Look?
          </h2>

          <p className="text-base sm:text-lg text-[#292522]/75 leading-relaxed font-normal">
            Send an appointment enquiry to check real-time availability with our salon team in Nagpur.
          </p>
        </div>

        {/* Card Frame */}
        <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 md:p-12 border border-[#C8A66A]/30 shadow-xl relative">
          
          {isSubmitted ? (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 px-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 border border-emerald-300">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292522] mb-3">
                Enquiry Ready to Send!
              </h3>

              <p className="text-sm sm:text-base text-[#292522]/75 max-w-lg mx-auto mb-6 leading-relaxed">
                Thank you, <strong className="text-[#292522]">{fullName}</strong>. We've prepared your appointment request for{' '}
                <strong className="text-[#292522]">{service}</strong> on{' '}
                <strong className="text-[#292522]">{date}</strong> ({timeSlot}).
              </p>

              <div className="bg-[#F6F0E8] rounded-2xl p-5 max-w-md mx-auto mb-8 border border-[#C8A66A]/30 text-left">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#C8A66A] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#292522]/80 leading-relaxed">
                    <strong>Honest Confirmation:</strong> Our salon team will review your requested time and confirm chair availability via WhatsApp or phone call.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={constructWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-[#FFFFFF] px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Again</span>
                </a>

                <a
                  href={SALON_DATA.business.phoneTel}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#292522] hover:bg-[#C8A66A] text-[#FAF6F0] hover:text-[#292522] px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all shadow"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us: {SALON_DATA.business.phone}</span>
                </a>
              </div>

              <button
                onClick={handleReset}
                className="mt-6 text-xs text-[#292522]/60 hover:text-[#292522] underline cursor-pointer"
              >
                Submit another appointment request
              </button>
            </motion.div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#292522] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#292522]/40">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#292522] placeholder-[#292522]/40 focus:bg-[#FFFFFF] transition-all ${
                        errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-[#C8A66A]/40 bg-[#FAF6F0]/60 focus:border-[#C8A66A]'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#292522] mb-2">
                    Phone Number (WhatsApp) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#292522]/40">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="e.g. 9876543210"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#292522] placeholder-[#292522]/40 focus:bg-[#FFFFFF] transition-all ${
                        errors.phone ? 'border-red-400 bg-red-50/30' : 'border-[#C8A66A]/40 bg-[#FAF6F0]/60 focus:border-[#C8A66A]'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>

              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#292522] mb-2">
                  Preferred Service <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    if (errors.service) setErrors({ ...errors, service: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-[#292522] focus:bg-[#FFFFFF] transition-all ${
                    errors.service ? 'border-red-400 bg-red-50/30' : 'border-[#C8A66A]/40 bg-[#FAF6F0]/60 focus:border-[#C8A66A]'
                  }`}
                >
                  <option value="">Select a service category...</option>
                  {SALON_DATA.services.map((item) => (
                    <option key={item.id} value={item.title}>
                      {item.title} ({item.category})
                    </option>
                  ))}
                  <option value="Consultation & Multiple Services">Consultation / Multiple Services</option>
                  <option value="Other / Custom Request">Other / Custom Request</option>
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Preferred Date */}
                <div>
                  <label htmlFor="date" className="block text-xs font-semibold uppercase tracking-wider text-[#292522] mb-2">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#292522]/40">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      min={todayStr}
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        if (errors.date) setErrors({ ...errors, date: '' });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#292522] focus:bg-[#FFFFFF] transition-all ${
                        errors.date ? 'border-red-400 bg-red-50/30' : 'border-[#C8A66A]/40 bg-[#FAF6F0]/60 focus:border-[#C8A66A]'
                      }`}
                    />
                  </div>
                  {errors.date && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label htmlFor="timeSlot" className="block text-xs font-semibold uppercase tracking-wider text-[#292522] mb-2">
                    Preferred Time Slot <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#292522]/40">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="timeSlot"
                      value={timeSlot}
                      onChange={(e) => {
                        setTimeSlot(e.target.value);
                        if (errors.timeSlot) setErrors({ ...errors, timeSlot: '' });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#292522] focus:bg-[#FFFFFF] transition-all ${
                        errors.timeSlot ? 'border-red-400 bg-red-50/30' : 'border-[#C8A66A]/40 bg-[#FAF6F0]/60 focus:border-[#C8A66A]'
                      }`}
                    >
                      <option value="">Select preferred time...</option>
                      <option value="Morning (10:30 AM - 1:00 PM)">Morning (10:30 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                      <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                    </select>
                  </div>
                  {errors.timeSlot && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.timeSlot}
                    </p>
                  )}
                </div>

              </div>

              {/* Optional Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#292522] mb-2">
                  Optional Message or Special Request
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us any specific look, hair length, or questions you have..."
                  className="w-full px-4 py-3 rounded-xl border border-[#C8A66A]/40 bg-[#FAF6F0]/60 focus:bg-[#FFFFFF] focus:border-[#C8A66A] text-sm text-[#292522] placeholder-[#292522]/40 transition-all resize-none"
                />
              </div>

              {/* Privacy-conscious & honest disclaimer */}
              <div className="p-4 rounded-xl bg-[#F6F0E8] border border-[#C8A66A]/25 text-xs text-[#292522]/70 leading-relaxed space-y-1">
                <p className="font-semibold text-[#292522]">
                  ℹ️ How Our Enquiry Process Works:
                </p>
                <p>
                  Submitted details are used solely to check availability and respond to your enquiry. Since appointments depend on chair and stylist availability, our team will confirm your slot via WhatsApp message or a brief phone call.
                </p>
              </div>

              {/* Form Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2.5 bg-[#292522] hover:bg-[#C8A66A] text-[#FAF6F0] hover:text-[#292522] py-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Appointment Enquiry via WhatsApp</span>
                </button>

                <a
                  href={SALON_DATA.business.phoneTel}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-[#C8A66A] hover:bg-[#C8A66A]/10 text-[#292522] px-6 py-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C8A66A]" />
                  <span>Call 09422823232</span>
                </a>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
