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
      className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ${
        active
          ? 'bg-[#C81D25] text-white shadow-lg scale-105'
          : 'bg-[#FFF8E7] text-[#1E1E1E] hover:bg-[#D4AF37] hover:text-white hover:scale-105'
      }`}
    >
      <span className="text-2xl mb-2">{icon}</span>
      <span className="text-xs font-semibold text-center whitespace-nowrap">{name}</span>
    </button>
  );
};

export default CategoryButton;
