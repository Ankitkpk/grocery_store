import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const AllProducts: React.FC = () => {
  const { products, searchQuery, setSearchQuery } = useContext(AppContext);
  const [filterProducts, setFilterProducts] = useState<any[]>([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilterProducts(
        products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      console.log("seeachquery updated");
    } else {
      setFilterProducts(products);
    }
  }, [products, searchQuery]);

  return (
    <div className="mt-16 flex flex-col px-4 md:px-12">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-semibold uppercase">All Products</p>
        <div className="w-16 h-0.5 bg-green-800 rounded-full mt-1" />
      </div>

      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filterProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
