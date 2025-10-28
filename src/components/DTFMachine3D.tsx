'use client';

import { useEffect, useRef, useState } from 'react';

export function DTFMachine3D() {
  const [isVisible, setIsVisible] = useState(false);
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
      className="relative w-full h-96 flex items-center justify-center"
    >
      {/* Máquina DTF 3D com CSS */}
      <div className="relative">
        {/* Base da máquina */}
        <div className="w-64 h-40 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl transform perspective-1000">
          {/* Painel de controle */}
          <div className="absolute top-4 left-4 w-18 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-sm shadow-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full absolute top-1 left-1 animate-pulse"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full absolute top-1 left-5 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-red-400 rounded-full absolute top-1 left-9 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Display */}
          <div className="absolute top-4 right-4 w-20 h-8 bg-black rounded-sm border border-gray-600">
            <div className="text-green-400 text-xs font-mono p-1">DTF</div>
          </div>
          
          {/* Entrada de papel */}
          <div className="absolute bottom-4 left-4 w-36 h-4 bg-gray-700 rounded-sm">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
          </div>
          
          {/* Saída de impressão */}
          <div className="absolute bottom-4 right-4 w-28 h-4 bg-gray-700 rounded-sm">
            <div className="w-10 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-sm animate-pulse"></div>
          </div>
        </div>

        {/* Braço da impressora */}
        <div 
          className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-16 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full transition-all duration-1000 ${
            isVisible ? 'animate-bounce' : ''
          }`}
          style={{
            animationDelay: '0.5s',
            animationDuration: '2s'
          }}
        >
          {/* Cabeça de impressão */}
          <div className="absolute -top-2 -left-1 w-4 h-4 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full shadow-lg">
            <div className="w-1 h-1 bg-white rounded-full absolute top-1 left-1"></div>
          </div>
        </div>

        {/* Partículas de tinta flutuantes */}
        {isVisible && (
          <>
            <div className="absolute top-16 left-8 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-20 left-12 w-1 h-1 bg-magenta-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-18 left-16 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-22 left-20 w-1 h-1 bg-black rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          </>
        )}

        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent rounded-lg animate-pulse"></div>
      </div>

      {/* Efeito de luz ambiente */}
      <div className="absolute inset-0 bg-gradient-radial from-gold-500/10 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
}
