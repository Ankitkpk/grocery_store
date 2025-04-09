import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const ProductCategory: React.FC = () => {
  const { products } = useContext(AppContext);
  const { category } = useParams();
  
  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category?.toLowerCase()
  );

  const filterProducts = products.filter(
    (product) => product.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="mt-24 px-4 md:px-12">
      {searchCategory && (
        <div className="flex flex-col items-end w-max">
          <p className="text-2xl font-medium">
            {searchCategory.text.toUpperCase()}
          </p>
          <div className="w-16 h-0.5 bg-green-800 rounded-full mt-1" />
        </div>
      )}

      {filterProducts.length > 0 ? (
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filterProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-8 text-gray-500">No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductCategory;
