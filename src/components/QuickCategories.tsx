import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryButton from './CategoryButton';
import { CATEGORIES } from '@/data/salons';

const QuickCategories: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/discover?category=${categoryId}`);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4">Browse by Category</h2>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-gray-600">Find exactly what you're looking for</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {CATEGORIES.map((category) => (
            <CategoryButton
              key={category.id}
              name={category.name}
              icon={category.icon}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickCategories;
