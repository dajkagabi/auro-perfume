import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useCart } from "../CartContext/CartContext"; // Szükséges a kosár funkcióhoz

const Navbar = ({ onCartClick }) => { // onCartClick prop fogadása
  const [menuOpen, setMenuOpen] = useState(false);
  useCart(); // Most már nem bontjuk ki a cartItems-t, mert nem használjuk vizuálisan az ikonnál

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between h-16 px-4 md:px-6">
        
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-18 w-auto object-contain" />
        </Link>

        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
        
          <li>
            <Link to="/" className="hover:text-gray-500">Home</Link>
          </li>
          <li>
            <Link to="/category" className="hover:text-gray-500">Category</Link>
          </li>
          <li>
            <Link to="/collections" className="hover:text-gray-500">Collections</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-500">Contact</Link>
          </li>
        </ul>

        {/* JOBB OLDAL: ikonok + hamburger */}
        <div className="flex items-center space-x-4 text-gray-700">
          {/* Kívánságlista ikon - Változatlan marad */}
          <Link to="/wishlist" className="hover:text-gray-500">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 
                6.364L12 20.364l7.682-7.682a4.5 
                4.5 0 00-6.364-6.364L12 
                7.636l-1.318-1.318a4.5 
                4.5 0 00-6.364 0z" />
            </svg>
          </Link>

          {/* Kosár ikon - A Link helyett button-t használunk az onClick miatt, de az SVG és a ping span változatlan */}
          <button onClick={onCartClick} className="relative hover:text-gray-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 
                13L5.4 5M7 13l-2.293 
                2.293c-.63.63-.184 1.707.707 
                1.707H17m0 0a2 2 0 
                100 4 2 2 0 000-4zm-8 
                2a2 2 0 11-4 0 2 2 0 
                014 0z" />
            </svg>
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-pink-500 animate-ping"></span>
          </button>

          {/* Felhasználói profil ikon - Változatlan marad */}
          <Link to="/profile" className="hover:text-gray-500">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 
                16c2.5 0 4.847.655 6.879 
                1.804M15 10a3 3 0 11-6 
                0 3 3 0 016 0zm6 2a9 9 0 
                11-18 0 9 9 0 0118 0z" />
              </svg>
          </Link>

          {/* HAMBURGER gomb csak mobilra - Változatlan marad */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

    
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4 text-gray-900 font-medium fixed top-16 left-0 w-full z-40 text-center shadow">
          <Link to="/" className="block hover:text-pink-600" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/category" className="block hover:text-pink-600" onClick={() => setMenuOpen(false)}>
            Category
          </Link>
          <Link to="/collections" className="block hover:text-pink-600" onClick={() => setMenuOpen(false)}>
            Collections
          </Link>
          <Link to="/contact" className="block hover:text-pink-600" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;