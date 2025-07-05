import video from '../../assets/ll.mp4';
import {Link} from 'react-router-dom';
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      {/* Háttérvideó */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
     
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Szöveg tartalom */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center text-white h-full px-4">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-2">
        Luxurious fragrances crafted with the finest ingredients to define your unique presence.
        </h1>
        <p className="text-base md:text-xl drop-shadow-md mb-4">
          Explore Scents
        </p>
       <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/category"
            className="px-6 py-3 bg-amber-100 text-black font-medium rounded-full"
          >
            Shop Collection
          </Link>
      </div>
      </div>
    </section>
  );
};

export default Hero;
