'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Mail, Phone, MapPin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicos: [
      { name: 'Impressão DTF', href: '#sobre' },
      { name: 'Personalização', href: '#vantagens' },
      { name: 'Portfólio', href: '#portfolio' },
      { name: 'Orçamento', href: '#contato' },
    ],
    legal: [
      { name: 'Termos de Uso', href: '/termos' },
      { name: 'Política de Privacidade', href: '/privacidade' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'LGPD', href: '/lgpd' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/kontesexpress/', label: 'Instagram' },
    { 
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ), 
      href: 'https://www.tiktok.com/@kontesexpress', 
      label: 'TikTok' 
    },
  ];

  return (
    <footer className="bg-dark-900 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <Link href="/" className="flex items-center space-x-3 group">
                  <div className="relative">
                    <img 
                      src="/images/logo-Kontes.png.webp" 
                      alt="Kontes Express Logo" 
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-lg group-hover:bg-gold-400/30 transition-all duration-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-bold gradient-text-gold">
                      DTF Rápido
                    </span>
                    <span className="text-xs text-gold-600 -mt-1">
                      by Kontes Express
                    </span>
                  </div>
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed"
              >
                Impressão DTF Premium com brilho, cor e precisão impecável. 
                Transformamos suas ideias em estampas de alta qualidade com 
                tecnologia de ponta e atendimento especializado.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gold-500" />
                  <span className="text-sm sm:text-base">+55 (11) 91900-9112</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gold-500" />
                  <span className="text-sm sm:text-base">kontesexpress@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gold-500" />
                  <span className="text-sm sm:text-base">R. Bresser, 601 - Brás, São Paulo - SP</span>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 capitalize">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm sm:text-base text-gray-400 hover:text-gold-400 transition-colors duration-300 touch-manipulation"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-gold-500/20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Fique por dentro das novidades
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              Receba dicas, promoções e novidades sobre impressão DTF diretamente no seu email.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-dark-700 border border-gold-500/20 rounded-xl text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300 text-sm sm:text-base touch-manipulation"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-gold-500/25 text-sm sm:text-base w-full sm:w-auto touch-manipulation"
              >
                Inscrever
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gold-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} DTF Rápido by Kontes Express. Todos os direitos reservados.
              <br />
              <span className="text-xs">
                Desenvolvido por{' '}
                <a 
                  href="https://www.evergreenmkt.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:text-gold-300 transition-colors duration-300 underline"
                >
                  Evergreen MKT
                </a>
              </span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-dark-800 border border-gold-500/20 rounded-lg text-gray-400 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-6 text-sm"
            >
              <Link href="/termos" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Termos
              </Link>
              <Link href="/privacidade" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Privacidade
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Cookies
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

