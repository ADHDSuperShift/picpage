import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppProvider } from '@/contexts/AppContext';
import Navbar from '@/components/Navbar';
import SalonCard from '@/components/SalonCard';
import CategoryButton from '@/components/CategoryButton';
import Footer from '@/components/Footer';
import { mockSalons } from '@/data/mockSalons';
import { CATEGORIES } from '@/data/salons';
import { haversineKm } from '@/lib/utils';

const Discover: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSalons, setFilteredSalons] = useState(mockSalons);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [radiusKm, setRadiusKm] = useState<number>(5);
  const [geoStatus, setGeoStatus] = useState<'idle' | 'loading' | 'granted' | 'denied' | 'error'>('idle');

  useEffect(() => {
    let filtered = mockSalons.map(s => ({ ...s }));
    if (selectedCategory) {
      filtered = filtered.filter(s => s.category === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (userLocation) {
      // Compute distances and filter by radius
      filtered = filtered
        .map(s => ({
          ...s,
          distance: parseFloat(haversineKm(userLocation, s.location).toFixed(1)),
        }))
        .filter(s => s.distance <= radiusKm)
        .sort((a, b) => a.distance - b.distance);
    }
    setFilteredSalons(filtered);
  }, [selectedCategory, searchQuery, userLocation, radiusKm]);

  const requestLocation = () => {
    if (!('geolocation' in navigator)) {
      setGeoStatus('error');
      return;
    }
    setGeoStatus('loading');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        setGeoStatus('granted');
      },
      (err) => {
        console.warn('Geolocation error', err);
        setGeoStatus(err.code === err.PERMISSION_DENIED ? 'denied' : 'error');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    );
  };

  return (
    <AppProvider>
  <div className="min-h-screen bg-background text-foreground">
        <Navbar />
  <div className="bg-[#1E1E1E] dark:bg-[#0f0f0f] text-white py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-[#D4AF37]">Discover</span> Salons
            </h1>
            <input
              type="text"
              placeholder="Search salons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-96 px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>
        </div>
  <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={requestLocation}
                className="bg-[#C81D25] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#D4AF37] transition-colors"
              >
                {geoStatus === 'loading' ? 'Locating…' : 'Use my location'}
              </button>
              {userLocation && (
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-200">Radius:</label>
                  <select
                    value={radiusKm}
                    onChange={(e) => setRadiusKm(Number(e.target.value))}
                    className="px-3 py-2 rounded-lg border border-white/10 bg-[#141414] text-gray-100"
                  >
                    {[2,5,10,20].map(r => (
                      <option key={r} value={r}>{r} km</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            {geoStatus === 'denied' && (
              <p className="text-sm text-red-600">Location permission denied. Enable it in your browser settings.</p>
            )}
            {geoStatus === 'error' && (
              <p className="text-sm text-red-600">Geolocation not available in this browser.</p>
            )}
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Filter by Category</h2>
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
