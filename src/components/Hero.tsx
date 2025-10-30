import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-[#C81D25] to-[#1E1E1E]">
        <img
          src="https://d64gsuwffb70l.cloudfront.net/690381b1d9c1a5d871136564_1761837546544_8c6c01a4.webp"
          alt="Luxury Salon"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-[#D4AF37]">Pic</span>
            <span className="text-white">Page</span>
          </h1>
          <div className="h-1 w-32 bg-[#D4AF37] mx-auto mb-6"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Find Your Perfect Salon Near You
        </h2>
        <p className="text-xl text-[#FFF8E7] mb-8 max-w-2xl">
          Luxury beauty — one tap away. Book appointments effortlessly.
        </p>
        <button
          onClick={() => navigate('/discover')}
          className="bg-[#C81D25] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 transform hover:scale-105"
        >
          Discover Salons
        </button>
      </div>
    </div>
  );
};

export default Hero;
