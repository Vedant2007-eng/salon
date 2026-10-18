import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

export function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleBookClick = () => {
    scrollToSection('booking');
  };

  const handleExploreServices = () => {
    scrollToSection('services');
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('booking');
  };

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F0E8] text-[#292522] selection:bg-[#C8A66A]/20 selection:text-[#292522] pb-16 lg:pb-0">
      {/* Top Sticky Navigation */}
      <Navbar onBookClick={handleBookClick} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={handleBookClick}
          onExploreServices={handleExploreServices}
        />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* About Section */}
        <About onContactClick={handleContactClick} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Customer Reviews Section */}
        <Reviews />

        {/* Gallery Section */}
        <Gallery />

        {/* Appointment Booking Section */}
        <BookingSection initialService={selectedService} />

        {/* Contact and Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onBookClick={handleBookClick} />

      {/* Floating CTA for Mobile screens */}
      <FloatingCTA onBookClick={handleBookClick} />
    </div>
  );
}

export default App;
