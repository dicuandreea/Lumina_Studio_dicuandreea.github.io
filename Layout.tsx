import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Instagram, Facebook, Mail } from 'lucide-react';
import { PageState } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageState;
  setPage: (page: PageState) => void;
  cartCount: number;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, setPage, cartCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Acasă', value: PageState.HOME },
    { label: 'Portofoliu', value: PageState.PORTFOLIO },
    { label: 'Servicii', value: PageState.SERVICES },
    { label: 'Magazin', value: PageState.SHOP },
    { label: 'Despre', value: PageState.ABOUT },
    { label: 'Contact', value: PageState.CONTACT },
  ];

  const handleNavClick = (page: PageState) => {
    setPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => handleNavClick(PageState.HOME)}
            >
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 font-serif">
                Lumina Studio
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    currentPage === item.value ? 'text-purple-400' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick(PageState.CHECKOUT)}
                className="relative p-2 text-slate-300 hover:text-purple-400 transition-colors"
              >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-purple-600 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => handleNavClick(PageState.CHECKOUT)}
                className="p-2 mr-2 text-slate-300 hover:text-purple-400"
              >
                 <ShoppingCart size={24} />
                 {cartCount > 0 && (
                  <span className="absolute top-3 right-12 bg-purple-600 rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    currentPage === item.value 
                      ? 'bg-slate-900 text-purple-400' 
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-serif font-bold text-slate-200">Lumina Studio</span>
              <p className="text-slate-500 text-sm mt-1">Artă digitală & Prelucrare Foto</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Lumina Studio. Proiect demonstrativ.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;