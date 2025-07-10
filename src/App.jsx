// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext'; 
import { useCart } from './components/CartContext/CartContext'; 
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import ProductCard from './components/productCard/ProductCard';
import Shop from './components/Shop/Shop'; 
import Cart from './components/Cart/Cart'; 
import Collections from './components/Collections/Collections';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';

const MainNavbar = ({ onCartClick }) => {
  const { cartItems } = useCart(); 
  return (
    <Navbar onCartClick={onCartClick} cartItemCount={cartItems.length} />
  );
};


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false); 

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <CartProvider> 
        <MainNavbar onCartClick={toggleCart} />
        <main className="pt-20 px-6">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/category" element={<Shop />} />
            <Route path="/collections" element={<Collections/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/wishlist" element={<h1 className="text-2xl font-bold">Wishlist Page</h1>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/product/:id" element={<ProductCard/>} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
          <Footer />
        </main>
  
        <Cart isOpen={isCartOpen} onClose={toggleCart} />
      </CartProvider>
    </Router>
  );
}

export default App;