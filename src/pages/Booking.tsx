import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { AppProvider } from '@/contexts/AppContext';
import Navbar from '@/components/Navbar';
import QRCode from '@/components/QRCode';
import Footer from '@/components/Footer';
import { mockSalons } from '@/data/mockSalons';

const Booking: React.FC = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');
  const salon = mockSalons.find(s => s.id === id);
  const service = salon?.services.find(s => s.id === serviceId);
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', date: '', time: ''
  });
  const [bookingId, setBookingId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBookingId = `BK${Date.now()}`;
    setBookingId(newBookingId);
    setStep(2);
  };

  if (!salon || !service) return <div>Not found</div>;

  return (
    <AppProvider>
  <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="bg-[#1E1E1E] text-white py-8 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold">
              <span className="text-[#D4AF37]">Book</span> Appointment
            </h1>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 py-8">
          {step === 1 ? (
            <div className="bg-[#1F1F1F] rounded-xl p-6 shadow-lg border border-white/10 text-gray-100">
              <h2 className="text-2xl font-bold text-white mb-6">{service.name}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#141414] text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#141414] text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#141414] text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#141414] text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#141414] text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#C81D25] text-white py-3 rounded-lg font-semibold hover:bg-[#D4AF37] transition-colors"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-[#1F1F1F] rounded-xl p-8 shadow-lg text-center border border-white/10 text-gray-100">
              <h2 className="text-3xl font-bold text-[#D4AF37] mb-6">Booking Confirmed!</h2>
              <div className="mb-6">
                <QRCode value={`BOOKING:${bookingId}|SALON:${salon.id}|DATE:${formData.date}|TIME:${formData.time}`} />
              </div>
              <div className="text-left bg-[#1B1B1B] border border-white/10 p-4 rounded-lg mb-6 text-gray-200">
                <p className="mb-2"><strong>Salon:</strong> {salon.name}</p>
                <p className="mb-2"><strong>Service:</strong> {service.name}</p>
                <p className="mb-2"><strong>Date:</strong> {formData.date}</p>
                <p className="mb-2"><strong>Time:</strong> {formData.time}</p>
                <p><strong>Booking ID:</strong> {bookingId}</p>
              </div>
              <button className="bg-[#C81D25] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D4AF37] transition-colors">
                Save QR Code
              </button>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default Booking;
