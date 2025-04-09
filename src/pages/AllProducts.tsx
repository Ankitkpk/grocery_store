import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

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

      {/* Search Bar */}
      <div className="mt-6 mb-4 w-full md:w-1/2">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterProducts.length > 0 ? (
          filterProducts.map((product: any) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-md transition duration-300"
            >
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="text-green-700 font-semibold">₹{product.price}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
