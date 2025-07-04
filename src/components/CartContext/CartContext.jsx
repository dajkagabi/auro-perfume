// src/context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Létrehozzuk a kosár kontextust
const CartContext = createContext();

// Egyedi hook a kosár kontextus eléréséhez
export const useCart = () => {
  return useContext(CartContext);
};

// Kosár Provider komponens
export const CartProvider = ({ children }) => {
  // A kosár állapotát a localStorage-ból töltjük be, vagy üres tömbbel kezdjük
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('cartItems');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Error parsing cart data from localStorage", error);
      return []; // Hiba esetén üres kosár
    }
  });

  // Ha a cartItems változik, elmentjük a localStorage-ba
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Termék hozzáadása a kosárhoz
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Ha a termék már a kosárban van, növeljük a mennyiségét
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Ha még nincs a kosárban, hozzáadjuk mennyiség: 1-gyel
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Termék eltávolítása a kosárból
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Termék mennyiségének növelése
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Termék mennyiségének csökkentése
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0) // Eltávolítja a 0 mennyiségű termékeket
    );
  };

  // Kosár teljes értékének számítása
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // A kosár kontextusban elérhető értékek
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};