import React from 'react';

interface CategoryButtonProps {
  name: string;
  icon: string;
  active?: boolean;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ name, icon, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 ${
        active
          ? 'bg-[#D4AF37] text-[#1F1F1F] border-[#D4AF37]/60 shadow-lg scale-105'
          : 'bg-[#C81D25] text-white border-[#C81D25]/60 hover:bg-[#D4AF37] hover:text-[#1F1F1F] hover:border-[#D4AF37]/60'
      }`}
    >
      <span className="text-2xl mb-2">{icon}</span>
      <span className="text-xs font-semibold text-center whitespace-nowrap">{name}</span>
    </button>
  );
};

export default CategoryButton;
