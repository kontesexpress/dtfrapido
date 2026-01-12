'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as fpixel from '@/lib/fpixel';
import { trackWhatsAppClick } from '@/lib/analytics';

export function WhatsAppButton() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      // Rastrear eventos (Google e Facebook CAPI)
      trackWhatsAppClick();
      fpixel.event('Contact', {
        content_name: 'WhatsApp Button',
        content_category: 'Lead',
      });

      const message = encodeURIComponent(
        'Olá! Vim pelo site DTF Rápido e gostaria de solicitar um orçamento para impressão DTF.'
      );
      window.open(`https://wa.me/5511961885415?text=${message}`, '_blank');
    }
  };

  if (!isMounted) return null;

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5 }}
    >
      <Image
        src="/images/whatsapp-logo.webp"
        alt="WhatsApp"
        width={42}
        height={42}
        className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300"
      />
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse" />

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-dark-800 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        WhatsApp - Resposta mais rápida!
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-dark-800" />
      </div>
    </motion.button>
  );
}
