import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import video from "../../assets/ll.mp4";

const Hero = () => {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      {/* Background Video */}
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
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center text-white h-full px-4">
        {/* Typewriter headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-4 max-w-4xl"
        >
          <Typewriter
            words={[
              "Fragrance is identity.",
              "Luxury in every note.",
              "Define your presence.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base md:text-xl drop-shadow-md mb-6"
        >
          Explore Scents That Define You
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/category"
            className="px-6 py-3 bg-amber-100 text-black font-medium rounded-full hover:bg-amber-200 transition duration-300"
          >
            Shop Collection
          </Link>
          <Link
            to="/collections"
            className="px-6 py-3 bg-white/20 border border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition duration-300 backdrop-blur-sm"
          >
            Find Your Scent
          </Link>
        </motion.div>

        {/* Scroll down hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm text-white/80 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          ↓ Scroll Down
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
