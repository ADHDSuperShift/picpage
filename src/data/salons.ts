export interface Salon {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  distance: number;
  image: string;
  location: { lat: number; lng: number; address: string };
  services: Service[];
  gallery: string[];
}

export interface Service {
  id: string;
  name: string;
  duration: string;
  price: number;
}

export const CATEGORIES = [
  { id: 'hair', name: 'Hair', icon: '💇' },
  { id: 'nails', name: 'Nails', icon: '💅' },
  { id: 'skin', name: 'Skin & Waxing', icon: '🧖‍♀️' },
  { id: 'makeup', name: 'Makeup', icon: '💄' },
  { id: 'massage', name: 'Massage & Spa', icon: '💆' },
  { id: 'skincare', name: 'Skincare', icon: '🌿' },
  { id: 'mens', name: "Men's Grooming", icon: '👔' }
];
