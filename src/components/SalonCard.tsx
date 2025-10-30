import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Salon } from '@/data/salons';

interface SalonCardProps {
  salon: Salon;
}

const SalonCard: React.FC<SalonCardProps> = ({ salon }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#1F1F1F] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/10">
      <div className="relative h-48 overflow-hidden">
        <img src={salon.image} alt={salon.name} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-[#1E1E1E]/80 text-[#D4AF37] px-3 py-1 rounded-full text-sm font-semibold">
          {salon.distance} km
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1">{salon.name}</h3>
        <p className="text-sm text-gray-400 mb-3">{salon.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-[#D4AF37] mr-1">★</span>
            <span className="font-semibold text-white">{salon.rating}</span>
            <span className="text-gray-400 text-sm ml-1">({salon.reviewCount})</span>
          </div>
          <span className="text-[#D4AF37] font-semibold">{salon.priceRange}</span>
        </div>
        <button
          onClick={() => navigate(`/salon/${salon.id}`)}
          className="w-full bg-[#C81D25] text-white py-2 rounded-lg font-semibold hover:bg-[#D4AF37] transition-colors duration-300"
        >
          View Salon
        </button>
      </div>
    </div>
  );
};

export default SalonCard;
