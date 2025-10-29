'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Award } from 'lucide-react';
import Image from 'next/image';
import { ModernBackground } from './ModernBackground';

export function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Modern Background */}
            <div className="absolute inset-0 z-0">
              <ModernBackground />
            </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20 md:pt-24">
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
            <Image 
              src="/images/logo-Kontes.png.webp" 
              alt="Kontes Express Logo" 
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
            <Zap className="h-4 w-4" />
            <span>Fornecedor DTF para Profissionais</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight px-2"
          >
            <span className="block text-white">Fornecedor de</span>
            <span className="block gradient-text-gold">Impressão DTF</span>
            <span className="block text-white">por metro</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Hot peel real, cores vibrantes, lote consistente.
            <br />
            <span className="text-gold-400 font-semibold">
              Entrega 24h • R$ 60/metro • PDF pronto
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 px-2"
          >
            <motion.a
              href="https://wa.me/5511919009112?text=Olá! Tenho PDF pronto para impressão DTF. Quantidade: __ metros. Tipo: __"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37, 211, 102, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-xl hover:shadow-green-500/25 flex items-center space-x-2 w-full sm:w-auto justify-center touch-manipulation"
            >
              <Image 
                src="/images/whatsapp-logo.webp" 
                alt="WhatsApp" 
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <span>Enviar PDF no WhatsApp</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 text-gold-300 border border-gold-500/30 px-6 sm:px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:from-gold-500/30 hover:to-gold-600/30 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center touch-manipulation"
              onClick={() => {
                const element = document.getElementById('especificacoes');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Award className="h-5 w-5" />
              <span>Ver Especificações PDF</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto px-2"
          >
            {[
              { number: 'R$ 60', label: 'Por metro DTF' },
              { number: '24h', label: 'Entrega garantida' },
              { number: 'Hot Peel', label: 'Retirada quente' },
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

