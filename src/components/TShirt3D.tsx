'use client';

import { useEffect, useRef, useState } from 'react';

export function TShirt3D() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
      {/* Camiseta 3D com CSS */}
      <div 
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Corpo da camiseta */}
        <div 
          className={`w-32 h-40 bg-gradient-to-b from-white to-gray-100 rounded-lg shadow-2xl transform transition-all duration-500 ${
            isHovered ? 'scale-110 rotate-2' : 'scale-100 rotate-0'
          }`}
          style={{
            transform: isVisible 
              ? `perspective(1000px) rotateX(15deg) rotateY(${isHovered ? '25deg' : '15deg'})` 
              : 'perspective(1000px) rotateX(15deg) rotateY(15deg)'
          }}
        >
          {/* Gola */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full"></div>
          
          {/* Mangas */}
          <div className="absolute top-4 -left-2 w-6 h-16 bg-gradient-to-b from-white to-gray-100 rounded-full"></div>
          <div className="absolute top-4 -right-2 w-6 h-16 bg-gradient-to-b from-white to-gray-100 rounded-full"></div>
          
          {/* Design impresso na camiseta */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-16">
            {/* Logo/Design central */}
            <div className="w-full h-full bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
              <div className="text-white font-bold text-sm">DTF</div>
            </div>
            
            {/* Efeito de brilho no design */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-lg animate-pulse"></div>
          </div>
          
          {/* Detalhes de costura */}
          <div className="absolute bottom-4 left-2 right-2 h-1 bg-gray-300 rounded-full"></div>
          <div className="absolute top-12 left-2 right-2 h-0.5 bg-gray-300 rounded-full"></div>
        </div>

        {/* Efeito de partículas de tinta */}
        {isVisible && (
          <>
            <div className="absolute top-16 left-8 w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-20 left-12 w-1 h-1 bg-magenta-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-18 left-16 w-1 h-1 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
            <div className="absolute top-22 left-20 w-1 h-1 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.9s' }}></div>
          </>
        )}

        {/* Efeito de impressão em ação */}
        {isVisible && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent rounded-lg animate-pulse"></div>
        )}

        {/* Sombra da camiseta */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-4 bg-black/20 rounded-full blur-sm"></div>
      </div>

      {/* Efeito de luz ambiente */}
      <div className="absolute inset-0 bg-gradient-radial from-gold-500/10 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
}
