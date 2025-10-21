'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star, MessageSquare } from 'lucide-react';
import { DTFShowcase3D } from './DTFShowcase3D';

export function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background 3D Showcase */}
      <div className="absolute inset-0 z-0">
        <DTFShowcase3D />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900 z-10" />

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center space-x-3 bg-gold-500/10 border border-gold-500/20 rounded-full px-6 py-3 text-gold-400 text-sm font-medium"
          >
            <img 
              src="/images/logo-Kontes.png.webp" 
              alt="Kontes Express Logo" 
              className="h-6 w-6 object-contain"
            />
            <Star className="h-4 w-4" />
            <span>Impressão DTF Premium</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-4"
          >
            <span className="block text-white">Impressão DTF</span>
            <span className="block gradient-text-gold">Premium</span>
            <span className="block text-white">com Brilho & Precisão</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Tecnologia de ponta para estampas personalizadas de alta qualidade.
            <br />
            <span className="text-gold-400 font-semibold">
              Impressão em até 24 horas úteis. DTF R$ 60/metro
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 215, 0, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-6 sm:px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-xl hover:shadow-gold-500/25 flex items-center space-x-2 w-full sm:w-auto justify-center touch-manipulation"
            >
              <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Imprima Agora</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-xl hover:shadow-green-500/25 flex items-center space-x-2 w-full sm:w-auto justify-center touch-manipulation"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const message = encodeURIComponent(
                    'Olá! Vim pelo site DTF Rápido e gostaria de solicitar um orçamento para impressão DTF.'
                  );
                  window.open(`https://wa.me/5511919009112?text=${message}`, '_blank');
                }
              }}
            >
              <MessageSquare className="h-5 w-5" />
              <span>WhatsApp - Mais Rápido</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
          >
            {[
              { number: '100+ Metros', label: 'DTF impresso diariamente' },
              { number: '99%', label: 'Satisfação' },
              { number: '24h', label: 'Entrega Rápida' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}

