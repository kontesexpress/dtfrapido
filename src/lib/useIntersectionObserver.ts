'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    try {
      const [entry] = entries;
      if (entry) {
        const isIntersecting = entry.isIntersecting;
        setIsIntersecting(isIntersecting);
        
        if (isIntersecting && options.triggerOnce) {
          setHasIntersected(true);
        }
      }
    } catch (error) {
      console.warn('Error in intersection handler:', error);
      // Fallback: definir como intersecting
      setIsIntersecting(true);
    }
  }, [options.triggerOnce]);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') {
      // Fallback para SSR: sempre retornar true
      setIsIntersecting(true);
      return;
    }
    
    const element = ref.current;
    if (!element) {
      // Fallback se não há elemento
      setIsIntersecting(true);
      return;
    }

    // Limpar observer anterior se existir
    if (observerRef.current) {
      try {
        observerRef.current.disconnect();
      } catch (error) {
        console.warn('Error disconnecting observer:', error);
      }
      observerRef.current = null;
    }

    try {
      // Verificar se IntersectionObserver está disponível
      if (typeof IntersectionObserver === 'undefined') {
        console.warn('IntersectionObserver not supported, using fallback');
        setIsIntersecting(true);
        return;
      }

      const observer = new IntersectionObserver(handleIntersection, {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      });

      observerRef.current = observer;
      observer.observe(element);

      return () => {
        if (observerRef.current) {
          try {
            observerRef.current.disconnect();
          } catch (error) {
            console.warn('Error disconnecting observer in cleanup:', error);
          }
          observerRef.current = null;
        }
      };
    } catch (error) {
      console.warn('IntersectionObserver error:', error);
      // Fallback: sempre mostrar como intersecting
      setIsIntersecting(true);
    }
  }, [isMounted, options.threshold, options.rootMargin, options.triggerOnce, handleIntersection]);

  // Se triggerOnce e já foi acionado, mantém true
  const finalIntersecting = options.triggerOnce && hasIntersected ? true : isIntersecting;

  return [ref, finalIntersecting] as const;
}
