import React from "react";

const ProductDetails: React.FC = () => {
  const product = {
    name: "Casual Shoes",
    category: "Sports",
    price: 100,
    offerPrice: 80,
    rating: 4,
    images: [
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png",
    ],
    description: [
      "High-quality material",
      "Comfortable for everyday use",
      "Available in different sizes",
    ],
  };

  const [thumbnail, setThumbnail] = React.useState<string>(product.images[0]);

  return (
    <div className="max-w-6xl w-full px-6">
      <p className="text-sm text-gray-600 mt-4">
        <span>Home</span> / <span>Products</span> /{" "}
        <span>{product.category}</span> /{" "}
        <span className="text-green-800">{product.name}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-16 mt-6">
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            {product.images.map((image, index) => (
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
            <img src={thumbnail} alt="Selected product" className="w-full" />
          </div>
        </div>


        <div className="text-sm w-full md:w-1/2">
          <h1 className="text-3xl font-semibold">{product.name}</h1>

        
          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) =>
              product.rating > i ? (
                <svg
                  key={i}
                  width="14"
                  height="13"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                    fill="#615fff"
                  />
                </svg>
              ) : (
                <svg
                  key={i}
                  width="14"
                  height="13"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                    fill="#615fff"
                    fillOpacity="0.35"
                  />
                </svg>
              )
            )}
            <p className="text-base ml-2">({product.rating})</p>
          </div>

          <div className="mt-6">
            <p className="text-gray-500 line-through">MRP: ${product.price}</p>
            <p className="text-2xl font-medium">MRP: ${product.offerPrice}</p>
            <span className="text-gray-500">(inclusive of all taxes)</span>
          </div>

          {/* Description */}
          <p className="text-base font-medium mt-6">About Product</p>
          <ul className="list-disc ml-4 text-gray-600">
            {product.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex items-center mt-10 gap-4 text-base">
            <button className="w-full py-3.5 font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition rounded">
              Add to Cart
            </button>
            <button className="w-full py-3.5 font-medium bg-green-800 text-white transition rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
