import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppProvider } from '@/contexts/AppContext';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import { mockSalons } from '@/data/mockSalons';

const SalonProfile: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const salon = mockSalons.find(s => s.id === id);
  const [activeTab, setActiveTab] = useState('services');

  if (!salon) return <div>Salon not found</div>;

  return (
    <AppProvider>
  <div className="min-h-screen bg-background text-foreground">
        <Navbar />
  <div className="relative h-64 md:h-96">
          <img src={salon.image} alt={salon.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-4xl font-bold mb-2">{salon.name}</h1>
            <div className="flex items-center gap-4">
              <span className="flex items-center">
                <span className="text-[#D4AF37] mr-1">★</span>
                <span className="font-semibold">{salon.rating}</span>
              </span>
              <span>{salon.location.address}</span>
            </div>
          </div>
        </div>
  <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-4 mb-8 border-b border-[#D4AF37]/20">
            {['services', 'gallery', 'about'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-4 font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-[#C81D25] border-b-2 border-[#C81D25]'
                    : 'text-gray-600 hover:text-[#D4AF37]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {salon.services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onBook={() => navigate(`/book/${salon.id}?service=${service.id}`)}
                />
              ))}
            </div>
          )}
          {activeTab === 'gallery' && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {salon.gallery.map((img, idx) => (
                <img key={idx} src={img} alt="" className="w-full h-48 object-cover rounded-lg" />
              ))}
            </div>
          )}
          {activeTab === 'about' && (
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700">{salon.description}</p>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default SalonProfile;
