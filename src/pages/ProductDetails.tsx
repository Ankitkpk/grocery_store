import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams, useNavigate, Link } from "react-router-dom";
import { assets } from "../assets/assets";
const ProductDetails: React.FC = () => {
  const { products, currency, addToCart } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item._id === id);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  useEffect(() => {
    if (product && product.images?.length > 0) {
      setThumbnail(product?.images[0]?product.images[0]:null);
    }
  }, [product]);

  useEffect(() => {
    if (products.length > 0 && product) {
      const filtered = products.filter(
        (item) => item.category === product.category && item._id !== product._id
      );
      setRelatedProducts(filtered.slice(0, 5));
    }
  }, [products, product]);

  if (!product) {
    return (
      <div className="max-w-6xl w-full px-6 py-10">
        <h2 className="text-2xl font-semibold text-red-600">
          Product not found.
        </h2>
        <button
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl w-full px-6">
      <p className="text-sm text-gray-600 mt-4">
        <Link to={"/"}>Home</Link> / <Link to={"/products"}>Products</Link> /{" "}
        <Link to={`/products/${product.category.toLowerCase()}`}>{product.category}</Link> /{" "}
        <span className="text-green-800">{product.name}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-16 mt-6">
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            {product?.images?.map((image: string, index: number) => (
              <div
                key={index}
                onClick={() => setThumbnail(image)}
                className="border max-w-24 border-gray-300 rounded overflow-hidden cursor-pointer hover:border-indigo-400 transition"
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="border border-gray-300 rounded overflow-hidden max-w-md">
            <img
              src={thumbnail || (product?.images?.length ? product.images[0] : "")}
              alt="Selected product"
              className="w-full"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="text-sm w-full md:w-1/2">
          <h1 className="text-3xl font-semibold">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) =>
             (
               <img src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt="" className="md:w-4 w-3.5" /> 
              )
            )}
            <p className="text-base ml-2">(4)</p>
          </div>
          <div className="mt-6">
            <p className="text-gray-500 line-through">
              MRP: {currency} {product.price}
            </p>
            <p className="text-2xl font-medium">
              Offer Price: {currency} {product.offerPrice}
            </p>
            <span className="text-gray-500">(inclusive of all taxes)</span>
          </div>
          <p className="text-base font-medium mt-6">About Product</p>
          <ul className="list-disc ml-4 text-gray-600">
            {product.description.map((desc: string, index: number) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center mt-10 gap-4 text-base">
            <button
              className="w-full py-3.5 font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition rounded"
              onClick={() => addToCart(product._id)}
            >
              Add to Cart
            </button>
            <button className="w-full py-3.5 font-medium bg-green-800 text-white transition rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/product/${item._id}`)}
                className="cursor-pointer border rounded-lg overflow-hidden hover:shadow-md transition"
              >
                {item?.images?.[0] && (
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-3">
                  <p className="font-medium">{item?.name}</p>
                  <p className="text-sm text-gray-600">
                    {currency} {item?.offerPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
