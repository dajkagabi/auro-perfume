import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useCart } from "../CartContext/CartContext";
import { useWishlist } from "../WishlistContext/WishlistContext";


import { Heart, ShoppingCart, User, Menu, X } from "lucide-react";

const Navbar = ({ onCartClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();

  const cartCount = cartItems?.length || 0;
  const wishlistCount = wishlist?.length || 0;

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between h-16 px-4 md:px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
        </Link>

        {/* Menü - Desktop */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
          <li><Link to="/category" className="hover:text-gray-500">Category</Link></li>
          <li><Link to="/collections" className="hover:text-gray-500">Collections</Link></li>
          <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
        </ul>

        {/* Jobb oldal ikonok */}
        <div className="flex items-center space-x-4 text-gray-700">
          {/* Wishlist ikon */}
          <Link to="/wishlist" className="relative hover:text-pink-500 transition">
            <Heart className="h-6 w-6" strokeWidth={1.5} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart ikon */}
          <button
            onClick={onCartClick}
            className="relative hover:text-blue-500 transition focus:outline-none"
          >
            <ShoppingCart className="h-6 w-6" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile ikon */}
          <Link to="/profile" className="hover:text-gray-500 transition">
            <User className="h-6 w-6" strokeWidth={1.5} />
          </Link>

          {/* Hamburger menü - Mobil */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobil menü */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4 text-gray-900 font-medium fixed top-16 left-0 w-full z-50 text-center shadow">
          <Link to="/" className="block hover:text-pink-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/category" className="block hover:text-pink-600" onClick={() => setMenuOpen(false)}>Category</Link>
          <Link to="/collections" className="block hover:text-pink-600" onClick={() => setMenuOpen(false)}>Collections</Link>
          <Link to="/contact" className="block hover:text-pink-600" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
