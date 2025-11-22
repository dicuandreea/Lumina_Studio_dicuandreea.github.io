import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import { PageState, CartItem, Artwork } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageState>(PageState.HOME);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Artwork) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    // Optional: Add simple notification toast logic here if needed, keeping it simple for now
    alert(`${item.title} a fost adăugat în coș!`);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case PageState.HOME:
        return <Home setPage={setCurrentPage} />;
      case PageState.PORTFOLIO:
        return <Portfolio />;
      case PageState.SERVICES:
        return <Services setPage={setCurrentPage} />;
      case PageState.SHOP:
        return <Shop addToCart={addToCart} />;
      case PageState.ABOUT:
        return <About />;
      case PageState.CONTACT:
        return <Contact />;
      case PageState.CHECKOUT:
        return <Checkout cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Layout currentPage={currentPage} setPage={setCurrentPage} cartCount={cartCount}>
      {renderPage()}
    </Layout>
  );
}

export default App;