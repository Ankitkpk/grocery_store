import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { AppContext } from "../context/AppContext";

const Seller: React.FC = () => {
  const { products } = useContext(AppContext);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-left text-2xl md:text-3xl font-light text-black mb-8">
        Best Seller
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.filter((product)=>product.inStock).slice(0,5).map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Seller;
