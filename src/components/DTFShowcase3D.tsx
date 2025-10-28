'use client';

import { useEffect, useRef, useState } from 'react';
import { DTFMachine3D } from './DTFMachine3D';
import { TShirt3D } from './TShirt3D';

export function DTFShowcase3D() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeElement, setActiveElement] = useState<'machine' | 'tshirt'>('machine');
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = containerRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isMounted]);

  // Alternar entre máquina e camiseta
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveElement(prev => prev === 'machine' ? 'tshirt' : 'machine');
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Não renderizar até estar montado no cliente
  if (!isMounted) {
    return (
      <div className="relative w-full h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500"></div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
    >
      {/* Container principal */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Máquina DTF */}
        <div 
          className={`absolute transition-all duration-1000 ${
            activeElement === 'machine' 
              ? 'opacity-100 scale-100 translate-x-0' 
              : 'opacity-30 scale-75 -translate-x-20'
          }`}
        >
          <DTFMachine3D />
        </div>

        {/* Camiseta 3D */}
        <div 
          className={`absolute transition-all duration-1000 ${
            activeElement === 'tshirt' 
              ? 'opacity-100 scale-100 translate-x-0' 
              : 'opacity-30 scale-75 translate-x-20'
          }`}
        >
          <TShirt3D />
        </div>

        {/* Seta conectora animada */}
        {isVisible && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-0.5 bg-gold-500 animate-pulse"></div>
              <div className="w-0 h-0 border-l-4 border-l-gold-500 border-t-2 border-t-transparent border-b-2 border-b-transparent animate-bounce"></div>
              <div className="w-8 h-0.5 bg-gold-500 animate-pulse"></div>
            </div>
          </div>
        )}

        {/* Partículas de tinta flutuantes */}
        {isVisible && (
          <>
            <div className="absolute top-16 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-20 left-1/3 w-1 h-1 bg-magenta-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-18 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-22 right-1/4 w-1 h-1 bg-black rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          </>
        )}

        {/* Efeito de luz ambiente */}
        <div className="absolute inset-0 bg-gradient-radial from-gold-500/10 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Indicadores de processo */}
      {isVisible && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
            activeElement === 'machine' ? 'bg-gold-500' : 'bg-gray-500'
          }`}></div>
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
            activeElement === 'tshirt' ? 'bg-gold-500' : 'bg-gray-500'
          }`}></div>
        </div>
      )}
    </div>
  );
}
