import React from 'react';
import SalonCard from './SalonCard';
import { mockSalons } from '@/data/mockSalons';

const FeaturedSalons: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#FFF8E7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4">Featured Salons</h2>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-gray-600">Discover top-rated beauty destinations near you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockSalons.map((salon) => (
            <SalonCard key={salon.id} salon={salon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSalons;
