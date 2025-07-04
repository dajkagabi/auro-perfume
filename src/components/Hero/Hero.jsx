import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/pfr.jpg"; 

const Hero = () => {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay – sötétítés */}
     

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-300 drop-shadow-xl">
          Signature Scent
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-6 drop-shadow">
          Luxurious fragrances crafted with the finest ingredients to define your unique presence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/collections"
            className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition"
          >
            Shop Collection
          </Link>
          <Link
            to="/scents"
            className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
          >
            Explore Scents
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
