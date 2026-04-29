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
  { id: 1, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800', category: 'Wedding', title: 'The Vows' },
  { id: 2, url: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=800', category: 'Fashion', title: 'Modern Elegance' },
  { id: 3, url: 'https://images.unsplash.com/photo-1504813184591-01592fd03cf7?q=80&w=800', category: 'Portrait', title: 'Deep Soul' },
  { id: 4, url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800', category: 'Event', title: 'Gala Night' },
  { id: 5, url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800', category: 'Product', title: 'Sonic Wave' },
  { id: 6, url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800', category: 'Fashion', title: 'Urban Chic' },
  { id: 7, url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800', category: 'Wedding', title: 'First Dance' },
  { id: 8, url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800', category: 'Portrait', title: 'Aged Grace' },
  { id: 9, url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800', category: 'Event', title: 'Techno Pulse' },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 1,
    title: 'The Eternal Flame',
    category: 'Wedding',
    client: 'The Andersons',
    location: 'Santorini, Greece',
    description: 'A dreamy sunset wedding on the cliffs of Santorini, capturing the raw emotions and breathtaking views.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200'
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
