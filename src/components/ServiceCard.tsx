import React from 'react';
import { Service } from '@/data/salons';

interface ServiceCardProps {
  service: Service;
  onBook: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBook }) => {
  return (
    <div className="bg-[#1F1F1F] rounded-lg p-4 border border-white/10 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-white text-lg">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.duration}</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-[#C81D25]">${service.price}</p>
        </div>
      </div>
      <button
        onClick={onBook}
        className="w-full bg-[#C81D25] text-white py-2 rounded-lg font-semibold hover:bg-[#D4AF37] transition-colors"
      >
        Book Now
      </button>
    </div>
  );
};

export default ServiceCard;
