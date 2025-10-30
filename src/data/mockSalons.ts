import { Salon } from './salons';

const images = [
  'https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837547371_713fac24.webp',
  'https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837549240_b26b3bfd.webp',
  'https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837550981_33aaf983.webp',
  'https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837552767_46e82a7e.webp',
  'https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837554545_bdfee572.webp',
  'https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837555312_31e13c3c.webp',
  'https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837557054_e500f048.webp',
  'https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837558800_812a8db0.webp',
  'https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837559558_76136460.webp',
  'https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837561305_e1dbbfa3.webp',
  'https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837563065_c7820275.webp',
  'https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837563850_88437b7b.webp',
  'https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837566359_ff01e32f.webp',
  'https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837568094_509caac7.webp'
];

export const mockSalons: Salon[] = [
  {
    id: '1', name: 'Luxe Beauty Studio', description: 'Premium hair and beauty services', category: 'hair',
    rating: 4.8, reviewCount: 124, priceRange: '$$$', distance: 0.8, image: images[0],
    location: { lat: -25.8587, lng: 28.191, address: '124 Jean Ave, Centurion, South Africa' },
    services: [
      { id: 's1', name: 'Haircut & Style', duration: '60 min', price: 85 },
      { id: 's2', name: 'Color Treatment', duration: '120 min', price: 180 },
      { id: 's3', name: 'Balayage', duration: '150 min', price: 250 }
    ],
    gallery: images.slice(0, 3)
  },
  {
    id: '2', name: 'Golden Nails Spa', description: 'Luxury nail care and spa treatments', category: 'nails',
    rating: 4.9, reviewCount: 203, priceRange: '$$', distance: 1.2, image: images[1],
    location: { lat: -25.8505, lng: 28.1903, address: '45 South St, Centurion CBD, Centurion' },
    services: [
      { id: 's4', name: 'Gel Manicure', duration: '45 min', price: 55 },
      { id: 's5', name: 'Spa Pedicure', duration: '60 min', price: 70 },
      { id: 's6', name: 'Nail Art', duration: '30 min', price: 35 }
    ],
    gallery: images.slice(5, 8)
  },
  {
    id: '3', name: 'Radiant Skin Studio', description: 'Advanced skincare and waxing', category: 'skin',
    rating: 4.7, reviewCount: 156, priceRange: '$$$', distance: 1.5, image: images[2],
    location: { lat: -25.8436, lng: 28.1728, address: '78 Hendrik Verwoerd Dr, Eldoraigne, Centurion' },
    services: [
      { id: 's7', name: 'Facial Treatment', duration: '75 min', price: 120 },
      { id: 's8', name: 'Full Body Wax', duration: '90 min', price: 150 }
    ],
    gallery: images.slice(2, 5)
  },
  {
    id: '4', name: 'Glamour Makeup Bar', description: 'Professional makeup and styling', category: 'makeup',
    rating: 4.9, reviewCount: 187, priceRange: '$$', distance: 0.9, image: images[3],
    location: { lat: -25.8279, lng: 28.2094, address: '21 Cantonments Rd, Lyttelton Manor, Centurion' },
    services: [
      { id: 's9', name: 'Bridal Makeup', duration: '120 min', price: 200 },
      { id: 's10', name: 'Evening Glam', duration: '60 min', price: 95 }
    ],
    gallery: images.slice(3, 6)
  },
  {
    id: '5', name: 'Serenity Spa & Massage', description: 'Relaxation and wellness treatments', category: 'massage',
    rating: 4.8, reviewCount: 245, priceRange: '$$$', distance: 2.1, image: images[4],
    location: { lat: -25.8881, lng: 28.2209, address: '5 Alexandra Rd, Irene, Centurion' },
    services: [
      { id: 's11', name: 'Swedish Massage', duration: '60 min', price: 110 },
      { id: 's12', name: 'Deep Tissue', duration: '90 min', price: 150 }
    ],
    gallery: images.slice(8, 11)
  },
  {
    id: '6', name: 'Pure Glow Skincare', description: 'Medical-grade skincare treatments', category: 'skincare',
    rating: 4.9, reviewCount: 198, priceRange: '$$$', distance: 1.8, image: images[5],
    location: { lat: -25.8895, lng: 28.1887, address: '185 Witch-Hazel Ave, Highveld, Centurion' },
    services: [
      { id: 's13', name: 'Chemical Peel', duration: '45 min', price: 180 },
      { id: 's14', name: 'Microdermabrasion', duration: '60 min', price: 140 }
    ],
    gallery: images.slice(5, 8)
  },
  {
    id: '7', name: 'Elite Mens Grooming', description: 'Premium barbershop and spa', category: 'mens',
    rating: 4.7, reviewCount: 167, priceRange: '$$', distance: 1.3, image: images[6],
    location: { lat: -25.8449, lng: 28.1935, address: '102 Rabie St, Die Hoewes, Centurion' },
    services: [
      { id: 's15', name: 'Haircut & Shave', duration: '45 min', price: 65 },
      { id: 's16', name: 'Beard Trim', duration: '30 min', price: 40 }
    ],
    gallery: images.slice(11, 14)
  },
  {
    id: '8', name: 'Velvet Touch Salon', description: 'Full-service beauty destination', category: 'hair',
    rating: 4.8, reviewCount: 211, priceRange: '$$', distance: 1.6, image: images[7],
    location: { lat: -25.8905, lng: 28.1884, address: '14 John Vorster Dr, Eco Park, Centurion' },
    services: [
      { id: 's17', name: 'Blowout', duration: '45 min', price: 55 },
      { id: 's18', name: 'Keratin Treatment', duration: '180 min', price: 300 }
    ],
    gallery: images.slice(0, 3)
  },
  {
    id: '9', name: 'Tranquil Wellness Spa', description: 'Holistic spa treatments', category: 'massage',
    rating: 4.9, reviewCount: 276, priceRange: '$$$', distance: 2.3, image: images[8],
    location: { lat: -25.8955, lng: 28.2345, address: '9 Twin Oaks Cres, Irene Farm Villages, Centurion' },
    services: [
      { id: 's19', name: 'Hot Stone Massage', duration: '90 min', price: 165 },
      { id: 's20', name: 'Aromatherapy', duration: '75 min', price: 135 }
    ],
    gallery: images.slice(8, 11)
  },
  {
    id: '10', name: 'Chic Nails Boutique', description: 'Trendy nail designs and care', category: 'nails',
    rating: 4.7, reviewCount: 189, priceRange: '$$', distance: 1.4, image: images[9],
    location: { lat: -25.8481, lng: 28.1837, address: '67 Lenchen Ave, Doringkloof, Centurion' },
    services: [
      { id: 's21', name: 'Acrylic Set', duration: '90 min', price: 80 },
      { id: 's22', name: 'Gel Extensions', duration: '120 min', price: 110 }
    ],
    gallery: images.slice(5, 8)
  },
  {
    id: '11', name: 'Prestige Hair Lounge', description: 'Celebrity-style hair services', category: 'hair',
    rating: 4.9, reviewCount: 234, priceRange: '$$$', distance: 1.1, image: images[10],
    location: { lat: -25.8401, lng: 28.1762, address: '3 Cantonments Rd, Clubview, Centurion' },
    services: [
      { id: 's23', name: 'Highlights', duration: '150 min', price: 220 },
      { id: 's24', name: 'Hair Extensions', duration: '180 min', price: 400 }
    ],
    gallery: images.slice(0, 3)
  },
  {
    id: '12', name: 'Gentleman Club Barber', description: 'Classic barbering with modern style', category: 'mens',
    rating: 4.8, reviewCount: 198, priceRange: '$$', distance: 1.7, image: images[11],
    location: { lat: -25.8899, lng: 28.1471, address: '220 Panorama Rd, Rooihuiskraal, Centurion' },
    services: [
      { id: 's25', name: 'Classic Cut', duration: '40 min', price: 50 },
      { id: 's26', name: 'Royal Shave', duration: '30 min', price: 45 }
    ],
    gallery: images.slice(11, 14)
  }
];
