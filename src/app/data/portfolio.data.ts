import { Service, GalleryItem, Testimonial, PricingPackage, FAQ, FeaturedProject } from '../models/portfolio.model';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Wedding Photography',
    description: 'Capturing the eternal bond and emotional moments of your special day with a cinematic touch.',
    icon: 'favorite',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800'
  },
  {
    id: 2,
    title: 'Portrait Photography',
    description: 'Professional portraits that reveal your true personality and unique character.',
    icon: 'face',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800'
  },
  {
    id: 3,
    title: 'Event Photography',
    description: 'Documenting the energy and atmosphere of your corporate or private events.',
    icon: 'event',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800'
  },
  {
    id: 4,
    title: 'Fashion Photography',
    description: 'High-end fashion shoots for brands, magazines, and personal portfolios.',
    icon: 'style',
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800'
  },
  {
    id: 5,
    title: 'Product Photography',
    description: 'Crisp, clean, and commercial-grade imagery for your products and brand.',
    icon: 'inventory_2',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800'
  },
  {
    id: 6,
    title: 'Travel Photography',
    description: 'Stunning landscapes and cultural stories from around the globe.',
    icon: 'public',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800'
  }
];

export const GALLERY: GalleryItem[] = [
  // Wedding
  { id: 1, url: 'asset/PHANTOMPHOTON/IMG_4763.JPG', category: 'Wedding', title: 'Eternal Vows' },
  { id: 2, url: 'asset/PHANTOMPHOTON/IMG_4764.JPG', category: 'Wedding', title: 'Golden Hour Couple' },
  { id: 3, url: 'asset/PHANTOMPHOTON/IMG_4767 (1).JPG', category: 'Wedding', title: 'The Celebration' },
  
  // Portrait
  { id: 4, url: 'asset/PHANTOMPHOTON/IMG_0817.JPG', category: 'Portrait', title: 'Serene Gaze' },
  { id: 5, url: 'asset/PHANTOMPHOTON/IMG_0819.JPG', category: 'Portrait', title: 'Urban Soul' },
  { id: 6, url: 'asset/PHANTOMPHOTON/IMG_0904.JPG', category: 'Portrait', title: 'Light & Shadow' },
  { id: 7, url: 'asset/PHANTOMPHOTON/IMG_1035.JPG', category: 'Portrait', title: 'Expressionism' },

  // Event
  { id: 8, url: 'asset/PHANTOMPHOTON/IMG_1402 (2).JPG', category: 'Event', title: 'Gala Night' },
  { id: 9, url: 'asset/PHANTOMPHOTON/IMG_1410.JPG', category: 'Event', title: 'The Performance' },
  { id: 10, url: 'asset/PHANTOMPHOTON/IMG_1418.JPG', category: 'Event', title: 'Crowd Energy' },
  { id: 11, url: 'asset/PHANTOMPHOTON/IMG_1456.JPG', category: 'Event', title: 'Backstage Magic' },

  // Fashion
  { id: 12, url: 'asset/PHANTOMPHOTON/IMG_0368.JPG', category: 'Fashion', title: 'Vogue Editorial' },
  { id: 13, url: 'asset/PHANTOMPHOTON/IMG_1081.JPG', category: 'Fashion', title: 'High Street' },
  { id: 14, url: 'asset/PHANTOMPHOTON/IMG_1091.JPG', category: 'Fashion', title: 'Minimalist Chic' },
  { id: 15, url: 'asset/PHANTOMPHOTON/IMG_1117 (1).JPG', category: 'Fashion', title: 'Summer Collection' },

  // Product
  { id: 16, url: 'asset/PHANTOMPHOTON/IMG_0502.JPG', category: 'Product', title: 'Tech Detail' },
  { id: 17, url: 'asset/PHANTOMPHOTON/IMG_0562.JPG', category: 'Product', title: 'Commercial Shot' },
  { id: 18, url: 'asset/PHANTOMPHOTON/IMG_1222.JPG', category: 'Product', title: 'Product Macro' },
  { id: 19, url: 'asset/PHANTOMPHOTON/masterpieces.png', category: 'Product', title: 'Branding Vision' },

  // Travel
  { id: 20, url: 'asset/PHANTOMPHOTON/IMG_0726.JPG', category: 'Travel', title: 'Mountain Escape' },
  { id: 21, url: 'asset/PHANTOMPHOTON/IMG_0734.JPG', category: 'Travel', title: 'Lakeside Peace' },
  { id: 22, url: 'asset/PHANTOMPHOTON/IMG_2855.JPG', category: 'Travel', title: 'Road Journey' },
  { id: 23, url: 'asset/PHANTOMPHOTON/Junayed_Hasan__Bluish_Twilight__MobilePhotography.jpeg', category: 'Travel', title: 'Bluish Twilight' },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 1,
    title: 'The Eternal Flame',
    category: 'Wedding',
    client: 'The Andersons',
    location: 'Santorini, Greece',
    description: 'A dreamy sunset wedding on the cliffs of Santorini, capturing the raw emotions and breathtaking views.',
    image: 'asset/PHANTOMPHOTON/masterpieces.png'
  },
  {
    id: 2,
    title: 'Urban Silhouette',
    category: 'Fashion',
    client: 'Vogue Magazine',
    location: 'New York City, USA',
    description: 'An edgy fashion editorial shot in the heart of Manhattan, exploring the intersection of light and shadow.',
    image: 'asset/PHANTOMPHOTON/IMG_0817.JPG'
  },
  {
    id: 3,
    title: 'Majestic Peaks',
    category: 'Travel',
    client: 'National Geographic',
    location: 'Himalayas, Nepal',
    description: 'A visual journey through the highest mountains on Earth, documenting the resilient spirit of the Sherpa people.',
    image: 'asset/PHANTOMPHOTON/IMG_4764.JPG'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Bride',
    content: 'The photos are absolutely breathtaking! You captured moments we didn\'t even know happened. Simply the best.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150'
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'CEO, TechVision',
    content: 'Professional, efficient, and with a keen eye for detail. The event photos exceeded all our expectations.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Fashion Designer',
    content: 'A true artist. The way you play with light and composition is magical. Looking forward to our next collaboration!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150'
  }
];

export const PRICING: PricingPackage[] = [
  {
    id: 1,
    name: 'Basic Shoot',
    price: '$299',
    features: ['2 Hours Session', '1 Location', '20 Edited Photos', 'Online Gallery', 'Print Rights'],
    duration: '2 Hours',
    photos: '20'
  },
  {
    id: 2,
    name: 'Premium Shoot',
    price: '$599',
    features: ['4 Hours Session', '2 Locations', '50 Edited Photos', 'Premium Retouching', 'Photo Album'],
    duration: '4 Hours',
    photos: '50',
    isPopular: true
  },
  {
    id: 3,
    name: 'Wedding Package',
    price: '$1,999',
    features: ['Full Day Coverage', 'Unlimited Locations', '200+ Edited Photos', 'Engagement Session', 'Handcrafted Album'],
    duration: 'Full Day',
    photos: '200+'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 1,
    question: 'How long does delivery take?',
    answer: 'Standard delivery time is 2-3 weeks for regular shoots and 6-8 weeks for weddings. We always provide a "sneak peek" within 48 hours!'
  },
  {
    id: 2,
    question: 'Do you provide edited photos?',
    answer: 'Yes, every photo you receive is professionally color-graded and retouched to maintain our signature cinematic look.'
  },
  {
    id: 3,
    question: 'Can I choose the location?',
    answer: 'Absolutely! We can shoot at your preferred location, or I can suggest some of my favorite hidden gems based on your vision.'
  },
  {
    id: 4,
    question: 'Do you cover events outside the city?',
    answer: 'Yes, I love traveling! Destination weddings and events are always welcome. Travel fees may apply depending on the distance.'
  },
  {
    id: 5,
    question: 'How can I book a session?',
    answer: 'You can use the contact form below or email me directly. A 25% deposit is required to secure your date.'
  }
];
