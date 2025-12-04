import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-soft py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-[1280px]">
        {/* Logo */}
        <div className="flex items-center">
            <a href="#" className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Advocacia<span className="text-accent">.</span>
            </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? 'text-primary' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="px-6 py-2.5 bg-accent text-white font-semibold text-sm rounded transition-all hover:bg-yellow-600 shadow-lg shadow-accent/20"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} className={!isScrolled ? 'text-white' : 'text-primary'} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-6 px-6 flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-primary font-medium text-lg border-b border-gray-100 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
             href="#contato"
             onClick={() => setMobileMenuOpen(false)}
             className="text-accent font-bold text-lg pt-2"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;