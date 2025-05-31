import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const imageUrl =
    product.images?.[0]?.secure_url ||
    "https://via.placeholder.com/400x300?text=No+Image";

  const handleImageClick = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col h-[400px]">
      {/* Image */}
      <div
        className="h-[300px] overflow-hidden rounded-t-xl cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={imageUrl}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col p-4 flex-grow">
        <h2
          className="text-lg font-semibold truncate"
          title={product.name}
        >
          {product.name}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2 my-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <button
            onClick={() => addToCart(product)}
            className="bg-pink-600 hover:bg-blue-600 text-white py-1.5 px-4 rounded-md text-sm transition"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
          <span className="text-blue-700 font-bold text-lg">
            ৳ {product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
