import React from 'react';
import ProductCard from './ProductCard';

const Seller: React.FC = () => {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-left text-2xl md:text-3xl font-light text-black mb-8">
        Best Seller
      </h1>
     <ProductCard/>
    </div>
  );
};

export default Seller;
