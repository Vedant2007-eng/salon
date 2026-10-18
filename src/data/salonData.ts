export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'color' | 'skincare' | 'styling' | 'interior';
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
}

export interface WhyChooseUsFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const SALON_DATA = {
  business: {
    name: 'Bellzium Family Salon',
    shortName: 'Bellzium',
    tagline: 'FAMILY SALON',
    eyebrow: 'YOUR BEAUTY. YOUR STYLE.',
    headline: 'Where Style Meets Self-Care.',
    heroDescription:
      'Discover your style, refresh your look, and enjoy a beauty experience designed around you.',
    aboutHeading: 'A Little Time for You.',
    aboutCopy:
      "At Bellzium Family Salon, personal style and self-care come together. Whether you're refreshing your everyday look or preparing for a special occasion, discover a welcoming space to explore your style.",
    phone: '09422823232',
    phoneFormatted: '+91 94228 23232',
    phoneTel: 'tel:+919422823232',
    whatsappNumber: '919422823232',
    address: {
      line1: 'Shop No 4 & 5, Narmada Apartment, Srinagar, Ring Road',
      landmark: 'Opposite Fire Brigade Office, Chatrapati Square, Suyog Nagar',
      city: 'Nagpur',
      state: 'Maharashtra',
      pincode: '440015',
      full: 'Shop No 4 & 5, Narmada Apartment, Srinagar, Ring Road, opposite Fire Brigade Office, Chatrapati Square, Suyog Nagar, Nagpur, Maharashtra 440015',
    },
    googleReviews: {
      rating: 4.4,
      totalCount: 417,
      maxRating: 5.0,
      url: 'https://www.google.com/maps/search/?api=1&query=Bellzium+Family+Salon+Narmada+Apartment+Ring+Road+Nagpur',
    },
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.789178722283!2d79.07684!3d21.11195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf8476a6b579%3A0x7d6a5c2d3a6c11a0!2sNarmada%20Apartment%2C%20Ring%20Rd%2C%20opposite%20Fire%20Station%2C%20Suyog%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440015!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },

  // Service categories (editable, data-driven structure)
  services: [
    {
      id: 'haircuts-styling',
      title: 'Haircuts & Styling',
      category: 'Hair Care',
      tagline: 'Precision Cutting & Tailored Silhouettes',
      description:
        'Customized haircuts sculpted to suit your face shape, lifestyle, and individual hair texture.',
      image: '/images/service-haircut.jpg',
      features: ['Personalized consultation', 'Precision scissor & razor styling', 'Blow-dry & heat finish'],
    },
    {
      id: 'hair-colouring',
      title: 'Hair Colouring',
      category: 'Colour Art',
      tagline: 'Balayage, Highlights & Global Hues',
      description:
        'Rich, multi-dimensional hair coloring techniques designed to enhance your natural undertones and radiance.',
      image: '/images/service-color.jpg',
      features: ['Global coloring', 'Dimension balayage & ombré', 'Root touch-ups & gloss toning'],
    },
    {
      id: 'hair-treatments',
      title: 'Hair Treatments',
      category: 'Restorative',
      tagline: 'Smoothness, Strength & Repair',
      description:
        'Targeted restorative therapies designed to tame frizz, nourish brittle strands, and rebuild hair vitality.',
      image: '/images/service-treatment.jpg',
      features: ['Keratin smoothing', 'Intense moisture infusion', 'Frizz control & split-end care'],
    },
    {
      id: 'hair-spa',
      title: 'Hair Spa',
      category: 'Therapy & Wellness',
      tagline: 'Deep Relaxation & Scalp Care',
      description:
        'Indulgent wash basin therapy with gentle scalp massages that soothe stress and revive tired locks.',
      image: '/images/service-spa.jpg',
      features: ['Detoxifying scalp cleanses', 'Deep conditioning masks', 'Stimulating relaxation massage'],
    },
    {
      id: 'skin-facial-care',
      title: 'Skin & Facial Care',
      category: 'Skin Wellness',
      tagline: 'Radiant, Hydrated & Glowing Skin',
      description:
        'Bespoke skincare rituals and gentle facials formulated to cleanse, hydrate, and brighten your complexion.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      features: ['Purifying deep cleansing', 'Hydrating & glow facials', 'Gentle exfoliation & masks'],
    },
    {
      id: 'bridal-party-styling',
      title: 'Bridal & Party Styling',
      category: 'Special Occasions',
      tagline: 'Celebration-Ready Elegance',
      description:
        'Complete hair artistry, draping, and special occasion styling designed to make you feel extraordinary for celebrations.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      features: ['Festive & bridal hairdos', 'Occasion makeup & styling', 'Party grooming packages'],
    },
    {
      id: 'mens-grooming',
      title: "Men's Grooming",
      category: 'Gentlemen',
      tagline: 'Sharp Cuts, Beards & Styling',
      description:
        'Tailored haircuts, crisp fades, precision beard shaping, and revitalizing grooming sessions for modern men.',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
      features: ['Modern fade & classic cuts', 'Beard trim & contouring', 'Energizing scalp & face care'],
    },
    {
      id: 'family-grooming',
      title: 'Family Grooming',
      category: 'All Ages',
      tagline: 'Care for Every Generation',
      description:
        'A warm, comfortable salon atmosphere welcoming women, men, and children for seamless family grooming visits.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      features: ['Gentle kids haircuts', 'Senior styling care', 'Convenient group appointments'],
    },
  ] as ServiceItem[],

  // Why Choose Us
  whyChooseUs: [
    {
      id: 'personal-style',
      title: 'Personal Style',
      description:
        'Every consultation starts with you. We take the time to understand your taste, daily routine, and aesthetic goals.',
      iconName: 'Sparkles',
    },
    {
      id: 'family-friendly',
      title: 'Family-Friendly Experience',
      description:
        'Designed as a welcoming sanctuary where family members of all ages enjoy thoughtful care and comfortable service.',
      iconName: 'Users',
    },
    {
      id: 'your-beauty',
      title: 'Your Beauty, Your Way',
      description:
        'From subtle refreshes to dramatic transformations, our craft is focused on bringing out your natural confidence.',
      iconName: 'HeartHandshake',
    },
    {
      id: 'convenient-location',
      title: 'Convenient Nagpur Location',
      description:
        'Situated right on Ring Road at Narmada Apartment, opposite the Fire Brigade Office in Suyog Nagar, with easy access.',
      iconName: 'MapPin',
    },
  ] as WhyChooseUsFeature[],

  // Curated Gallery Items
  gallery: [
    {
      id: 'gal-1',
      title: 'Salon Sanctuary & Styling Stations',
      category: 'interior',
      categoryLabel: 'Ambiance',
      image: '/images/hero-salon.jpg',
      alt: 'Luxury salon interior with champagne gold arched mirrors and soft leather chairs',
      description: 'Our serene styling stations crafted for peaceful self-care and comfort.',
    },
    {
      id: 'gal-2',
      title: 'Textured Bob & Modern Layers',
      category: 'hair',
      categoryLabel: 'Haircut',
      image: '/images/service-haircut.jpg',
      alt: 'Stylist finishing a textured wavy bob haircut on a smiling client',
      description: 'Precision scissor work and effortless movement for contemporary style.',
    },
    {
      id: 'gal-3',
      title: 'Sun-Kissed Balayage Dimensions',
      category: 'color',
      categoryLabel: 'Coloring',
      image: '/images/service-color.jpg',
      alt: 'Client showing lustrous warm caramel balayage waves in salon light',
      description: 'Seamless blending of tones for a naturally radiant, glossy finish.',
    },
    {
      id: 'gal-4',
      title: 'Mirror-Glaze Restorative Treatment',
      category: 'hair',
      categoryLabel: 'Treatment',
      image: '/images/service-treatment.jpg',
      alt: 'Sleek glossy silky brunette hair after deep conditioning therapy',
      description: 'Silky, tangle-free hair health achieved through restorative care.',
    },
    {
      id: 'gal-5',
      title: 'Therapeutic Scalp Spa & Wash',
      category: 'styling',
      categoryLabel: 'Hair Spa',
      image: '/images/service-spa.jpg',
      alt: 'Client relaxing at luxury shampoo station enjoying a soothing scalp massage',
      description: 'A calming wash basin ritual designed to ease tension and nourish the scalp.',
    },
    {
      id: 'gal-6',
      title: 'Hydrating Botanical Glow Facial',
      category: 'skincare',
      categoryLabel: 'Skin Care',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      alt: 'Facial skincare treatment session with gentle organic serum application',
      description: 'Gentle hydration rituals that restore natural radiance and softness.',
    },
    {
      id: 'gal-7',
      title: 'Tailored Men’s Cut & Beard Sculpting',
      category: 'styling',
      categoryLabel: 'Grooming',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
      alt: 'Sharp gentleman styling with clean taper and well-groomed beard',
      description: 'Sharp lines, balanced proportions, and clean grooming for men.',
    },
    {
      id: 'gal-8',
      title: 'Personalized Style Consultation',
      category: 'interior',
      categoryLabel: 'Consultation',
      image: '/images/about-experience.jpg',
      alt: 'Stylist consulting warmly with client in front of an ornate salon mirror',
      description: 'Dedicated one-on-one attention to craft your desired look.',
    },
  ] as GalleryItem[],

  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
};
