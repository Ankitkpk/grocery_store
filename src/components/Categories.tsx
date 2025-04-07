import React from 'react';
import { categories } from '../assets/assets';
import { Link } from 'react-router-dom';

const Categories: React.FC = () => {
  return (
    <div className="py-10 px-2">
    <h2 className="text-left text-2xl md:text-3xl font-light text-black mb-8">
    Categories
    </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10 max-w-7xl mx-auto">
        {categories.map((item, index) => (
          <Link
            to={`/category/${item.path}`}
            key={index}
            className="flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
            style={{ backgroundColor: item.bgColor }}
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-20 h-20 object-contain mb-3"
            />
            <p className="text-base font-medium text-gray-800 text-center">{item.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
