import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import QuickCategories from './QuickCategories';
import FeaturedSalons from './FeaturedSalons';
import HowItWorks from './HowItWorks';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <QuickCategories />
      <FeaturedSalons />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default AppLayout;
