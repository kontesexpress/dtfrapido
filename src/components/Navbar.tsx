'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 50);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Close menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: '#sobre', label: 'Sobre DTF' },
    { href: '#dtfuv', label: 'DTF UV' },
    { href: '#portfolio', label: 'Portfólio' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-gold-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="#home" 
            onClick={closeMenu}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <img 
                src="/images/logo-Kontes.png.webp" 
                alt="Kontes Express Logo" 
                className="h-10 w-10 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-lg group-hover:bg-gold-400/30 transition-all duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text-gold">
                DTF Rápido
              </span>
              <span className="text-xs text-gold-600 -mt-1">
                by Kontes Express
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  const element = document.getElementById(item.href.replace('#', ''));
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white hover:text-gold-400 transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('especificacoes');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-6 py-2 rounded-full font-semibold hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-gold-500/25"
            >
              Orçamento Grátis
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-gold-400 transition-colors duration-300 p-3 rounded-lg hover:bg-gold-500/10 touch-manipulation"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark-900/95 backdrop-blur-md border-t border-gold-500/20 mobile-menu"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.href.replace('#', ''));
                      element?.scrollIntoView({ behavior: 'smooth' });
                      closeMenu();
                    }}
                    className="block text-white hover:text-gold-400 transition-colors duration-300 font-medium py-4 px-4 rounded-lg hover:bg-gold-500/10 touch-manipulation w-full text-left"
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.getElementById('especificacoes');
                    element?.scrollIntoView({ behavior: 'smooth' });
                    closeMenu();
                  }}
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-6 py-4 rounded-full font-semibold hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg touch-manipulation"
                >
                  Orçamento Grátis
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

