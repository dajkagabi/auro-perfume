import React, { useState } from 'react'; 
import auroPerfumeImage from '../../assets/jk.png';

import { useCart } from '../../components/CartContext/CartContext';
import Cart from '../Cart/Cart'; 

const Collections = () => {

  const { addToCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false); 

  const product = {
    id: 'auro001',
    name: 'Auro Perfume',
    price: 89.0,
    quantity: 1,
    image: auroPerfumeImage,
  };

  const handleAddToCart = () => {
    addToCart(product);
    setIsCartOpen(true); 
    
  };

  const handleCloseCart = () => {
    setIsCartOpen(false); 
  };

  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Termékkép */}
        <div className="w-full">
          <img
            src={auroPerfumeImage}
            alt="Auro Perfume"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Termékleírás */}
        <div className="flex flex-col gap-6 text-gray-800">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Auro Perfume</h2>
          <p className="text-lg">
            Auro Perfume is a luxurious fragrance crafted for those who embrace elegance with a modern edge. Infused with the rarest ingredients, it defines your presence with every drop.
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-1">Recommended for:</h3>
            <p className="text-md">Modern, confident individuals who seek distinction through scent.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Volume:</h3>
            <p className="text-md">50 ml / 1.7 fl oz</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Price:</h3>
            <p className="text-md font-bold text-black">$89.00</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Ingredients:</h3>
            <ul className="list-disc list-inside text-md">
              <li>Orris root</li>
              <li>Amberwood</li>
              <li>Blackcurrant</li>
              <li>White musk</li>
              <li>Bergamot</li>
              <li>Sandalwood</li>
            </ul>
          </div>

          <button
            onClick={handleAddToCart}
            className="self-start mt-4 px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      
      {isCartOpen && <Cart onClose={handleCloseCart} />}
    </section>
  );
};

export default Collections;