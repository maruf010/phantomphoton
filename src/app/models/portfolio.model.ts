export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  category: 'Wedding' | 'Portrait' | 'Event' | 'Fashion' | 'Product' | 'All';
  title: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface PricingPackage {
  id: number;
  name: string;
  price: string;
  features: string[];
  duration: string;
  photos: string;
  isPopular?: boolean;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface FeaturedProject {
  id: number;
  title: string;
  category: string;
  client: string;
  location: string;
  description: string;
  image: string;
}
