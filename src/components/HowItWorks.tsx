import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Find Your Salon',
      description: 'Browse nearby salons by category, rating, and distance. Use our smart filters to find exactly what you need.'
    },
    {
      number: '02',
      title: 'Choose Service',
      description: 'View detailed service menus with pricing and duration. Select the perfect treatment for your needs.'
    },
    {
      number: '03',
      title: 'Book Instantly',
      description: 'Pick your preferred date and time. Fill in your details and confirm your appointment in seconds.'
    },
    {
      number: '04',
      title: 'Get QR Code',
      description: 'Receive a unique QR code for your booking. Show it at the salon for instant check-in.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#1E1E1E] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-gray-300">Appointments made effortless</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="text-6xl font-bold text-[#D4AF37] mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
