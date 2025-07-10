// src/components/Wishlist/Wishlist.jsx
import React from 'react';
import { useWishlist } from '../WishlistContext/WishlistContext';

const Wishlist = () => {
  // Itt módosítjuk: wishlistItems helyett wishlist
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <section className="bg-gray-1 py-10 lg:py-20 min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center">
           WishList
          </h1>

          {/* Itt is módosítjuk: wishlistItems helyett wishlist, és hozzáadunk egy ellenőrzést, ha a wishlist undefined */}
          {!wishlist || wishlist.length === 0 ? (
            <p className="text-center text-body-color text-lg">
              Your wishlist is empty. Start adding products!
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden relative p-4 flex flex-col items-center text-center"
                >

                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition z-10"
                    aria-label="Remove item from wishlist"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>


                  <div className="relative w-40 h-40 mx-auto overflow-hidden rounded-md mt-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="text-center mt-4">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">{item.category}</p>
                    <p className="text-xl font-bold text-gray-900 mt-2">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;