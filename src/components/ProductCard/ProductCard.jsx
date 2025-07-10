import React from 'react';
import { useCart } from '../CartContext/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

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
        <p className="text-gray-600">{product.category}</p>
        <p className="text-xl font-bold text-gray-900 mt-2">${product.price.toFixed(2)}</p>

     
        {/* Gomb */}
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
