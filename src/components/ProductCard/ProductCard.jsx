
import React from 'react';
import { useCart } from '../CartContext/CartContext'; 

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); 

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group">
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
      {/* Fontos: ellenőrizze, hogy a product.image van-e használva! */}
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600">{product.category}</p>
        <p className="text-xl font-bold text-gray-900 mt-2">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)} // Hozzáadjuk a terméket a kosárhoz
          className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;