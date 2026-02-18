
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSiteConfig } from '../App';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { config } = useSiteConfig();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { initialTextColor, scrolledTextColor, scrolledBgColor, logoColor } = config.header;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ 
        backgroundColor: isScrolled ? scrolledBgColor : 'transparent',
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'shadow-sm border-b border-soft-gold/10 backdrop-blur-md' : ''
      }`}
    >
      <div className="max-w-[120rem] mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="group relative overflow-hidden">
            <h1
              style={{ color: isScrolled ? scrolledTextColor : initialTextColor }}
              className="font-heading text-2xl md:text-3xl transition-colors duration-500 flex items-center gap-2"
            >
              <span style={{ color: logoColor }}>{config.siteLogo}</span>
              <span className="tracking-tighter">{config.siteTitle}</span>
            </h1>
            <div className="h-[1px] w-full bg-soft-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {config.navigation.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  style={{ 
                    color: isActive ? '#d4af37' : (isScrolled ? scrolledTextColor : `${initialTextColor}CC`)
                  }}
                  className="font-paragraph text-[10px] uppercase tracking-[0.2em] transition-all duration-500 relative group"
                >
                  {link.name}
                  <span 
                    className={`absolute -bottom-2 left-0 h-[1px] bg-soft-gold transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                  />
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: isScrolled ? scrolledTextColor : initialTextColor }}
            className="lg:hidden p-2 transition-colors duration-500"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-off-white border-b border-soft-gold/20 flex flex-col p-8 gap-6 shadow-2xl"
          >
            {config.navigation.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-2xl text-deep-brown hover:text-soft-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
