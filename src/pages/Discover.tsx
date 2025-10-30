import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppProvider } from '@/contexts/AppContext';
import Navbar from '@/components/Navbar';
import SalonCard from '@/components/SalonCard';
import CategoryButton from '@/components/CategoryButton';
import Footer from '@/components/Footer';
import { mockSalons } from '@/data/mockSalons';
import { CATEGORIES } from '@/data/salons';

const Discover: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSalons, setFilteredSalons] = useState(mockSalons);

  useEffect(() => {
    let filtered = mockSalons;
    if (selectedCategory) {
      filtered = filtered.filter(s => s.category === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredSalons(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <AppProvider>
      <div className="min-h-screen bg-[#FFF8E7]">
        <Navbar />
        <div className="bg-[#1E1E1E] text-white py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-[#D4AF37]">Discover</span> Salons
            </h1>
            <input
              type="text"
              placeholder="Search salons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-96 px-4 py-3 rounded-lg text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#1E1E1E] mb-4">Filter by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {CATEGORIES.map((cat) => (
                <CategoryButton
                  key={cat.id}
                  name={cat.name}
                  icon={cat.icon}
                  active={selectedCategory === cat.id}
                  onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSalons.map((salon) => (
              <SalonCard key={salon.id} salon={salon} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default Discover;
