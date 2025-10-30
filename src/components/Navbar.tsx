import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@/components/theme-provider';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-[#1E1E1E] dark:bg-[#0f0f0f] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => navigate('/')} className="text-2xl font-bold">
            <span className="text-[#D4AF37]">PicPage</span>
          </button>
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => navigate('/')}
              className={`hover:text-[#D4AF37] transition-colors ${isActive('/') ? 'text-[#D4AF37]' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => navigate('/discover')}
              className={`hover:text-[#D4AF37] transition-colors ${isActive('/discover') ? 'text-[#D4AF37]' : ''}`}
            >
              Discover
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className={`hover:text-[#D4AF37] transition-colors ${isActive('/dashboard') ? 'text-[#D4AF37]' : ''}`}
            >
              Dashboard
            </button>
            <div className="flex items-center gap-2">
              <select
                aria-label="Theme"
                className="bg-transparent border border-[#D4AF37]/40 rounded px-2 py-1 text-sm"
                value={theme}
                onChange={(e) => setTheme(e.target.value as any)}
              >
                <option className="text-[#1E1E1E]" value="light">Light</option>
                <option className="text-[#1E1E1E]" value="dark">Dark</option>
                <option className="text-[#1E1E1E]" value="system">System</option>
              </select>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E1E1E] border-t border-[#D4AF37]/20">
          <button onClick={() => { navigate('/'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 hover:bg-[#D4AF37]/20">
            Home
          </button>
          <button onClick={() => { navigate('/discover'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 hover:bg-[#D4AF37]/20">
            Discover
          </button>
          <button onClick={() => { navigate('/dashboard'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 hover:bg-[#D4AF37]/20">
            Dashboard
          </button>
          <div className="px-4 py-3">
            <label className="block text-sm mb-1">Theme</label>
            <select
              aria-label="Theme"
              className="w-full bg-transparent border border-[#D4AF37]/40 rounded px-2 py-2 text-sm"
              value={theme}
              onChange={(e) => setTheme(e.target.value as any)}
            >
              <option className="text-[#1E1E1E]" value="light">Light</option>
              <option className="text-[#1E1E1E]" value="dark">Dark</option>
              <option className="text-[#1E1E1E]" value="system">System</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
