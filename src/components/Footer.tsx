import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#1E1E1E] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">PicPage</h3>
            <p className="text-gray-400 text-sm">Find. Book. Glow.</p>
            <p className="text-gray-400 text-sm mt-2">Luxury beauty — one tap away.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#D4AF37] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigate('/')} className="hover:text-[#D4AF37] transition-colors">Home</button></li>
              <li><button onClick={() => navigate('/discover')} className="hover:text-[#D4AF37] transition-colors">Find Salons</button></li>
              <li><button onClick={() => navigate('/dashboard')} className="hover:text-[#D4AF37] transition-colors">Salon Dashboard</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#D4AF37] mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">Hair Salons</li>
              <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">Nail Spas</li>
              <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">Massage & Spa</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#D4AF37] mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">support@picpage.com</p>
            <p className="text-gray-400 text-sm mt-2">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-[#D4AF37]/20 pt-6 text-center text-sm text-gray-400">
          © 2025 PicPage. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
