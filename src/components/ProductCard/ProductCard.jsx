import React from 'react';
import { useCart } from '../CartContext/CartContext';
import { useWishlist } from '../WishlistContext/WishlistContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();


  const isFavorite = isInWishlist(product.id);


  const handleWishlistToggle = () => {
    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-100 transition-shadow duration-300 overflow-hidden relative group p-4">


      {product.isNew && (
        <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          New
        </span>
      )}
      {product.isSale && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          Sale
        </span>
      )}


      <div className="relative w-40 h-40 mx-auto overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
        />
      </div>


      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        {/* A szívecske ikon ide került, a termék neve alá */}
        <button
          onClick={handleWishlistToggle}
          className={`mt-1 mb-2 p-1 rounded-full ${
            isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
          } transition-colors duration-200`}
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-current inline-block"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <p className="text-gray-600">{product.category}</p>
        <p className="text-xl font-bold text-gray-900 mt-2">${product.price.toFixed(2)}</p>


        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;