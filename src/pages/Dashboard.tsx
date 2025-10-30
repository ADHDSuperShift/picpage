import React, { useState } from 'react';
import { AppProvider } from '@/contexts/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  
  const mockBookings = [
    { id: 'BK001', customer: 'Sarah Johnson', service: 'Haircut & Style', date: '2025-11-01', time: '10:00 AM', status: 'Confirmed' },
    { id: 'BK002', customer: 'Emily Davis', service: 'Gel Manicure', date: '2025-11-01', time: '2:00 PM', status: 'Pending' },
    { id: 'BK003', customer: 'Michael Brown', service: 'Beard Trim', date: '2025-11-02', time: '11:00 AM', status: 'Confirmed' }
  ];

  return (
    <AppProvider>
  <div className="min-h-screen bg-background text-foreground">
        <Navbar />
  <div className="bg-[#1E1E1E] dark:bg-[#0f0f0f] text-white py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold">
              <span className="text-[#D4AF37]">Salon</span> Dashboard
            </h1>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-4 mb-8">
            {['bookings', 'services', 'scanner'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? 'bg-[#C81D25] text-white'
                    : 'bg-white text-[#1E1E1E] hover:bg-[#D4AF37] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {activeTab === 'bookings' && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#1E1E1E] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Booking ID</th>
                    <th className="px-6 py-4 text-left">Customer</th>
                    <th className="px-6 py-4 text-left">Service</th>
                    <th className="px-6 py-4 text-left">Date & Time</th>
                    <th className="px-6 py-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-gray-200 hover:bg-[#FFF8E7]">
                      <td className="px-6 py-4 font-semibold">{booking.id}</td>
                      <td className="px-6 py-4">{booking.customer}</td>
                      <td className="px-6 py-4">{booking.service}</td>
                      <td className="px-6 py-4">{booking.date} at {booking.time}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 'scanner' && (
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <h2 className="text-2xl font-bold text-[#1E1E1E] mb-4">QR Code Scanner</h2>
              <div className="w-64 h-64 mx-auto bg-[#FFF8E7] rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-600">Camera view would appear here</p>
              </div>
              <button className="bg-[#C81D25] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D4AF37] transition-colors">
                Start Scanning
              </button>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default Dashboard;
