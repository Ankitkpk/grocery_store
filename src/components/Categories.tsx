import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../assets/assets'; // Adjust the path if needed

const Categories: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-10 px-2">
      <h2 className="text-left text-2xl md:text-3xl font-light text-black mb-8">
        Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10 max-w-7xl mx-auto">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/products/${item.path.toLowerCase()}`);
              window.scrollTo(0, 0); 
            }}
            className="flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer"
            style={{ backgroundColor: item.bgColor }}
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-20 h-20 object-contain mb-3"
            />
            <p className="text-base font-medium text-gray-800 text-center">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
