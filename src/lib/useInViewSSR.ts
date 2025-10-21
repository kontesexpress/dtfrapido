'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface UseInViewSSROptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInViewSSR(options: UseInViewSSROptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    try {
      const [entry] = entries;
      if (entry && entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce) {
          setHasTriggered(true);
        }
      } else if (!options.triggerOnce) {
        setIsInView(false);
      }
    } catch (error) {
      console.warn('Error in intersection handler:', error);
      // Fallback: definir como inView
      setIsInView(true);
    }
  }, [options.triggerOnce]);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') {
      // Fallback para SSR: sempre retornar true
      setIsInView(true);
      return;
    }
    
    const element = ref.current;
    if (!element) {
      // Fallback se não há elemento
      setIsInView(true);
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

    // Limpar timeout anterior
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Timeout de fallback para garantir que funcione
    timeoutRef.current = setTimeout(() => {
      if (!isInView) {
        setIsInView(true);
      }
    }, 1000);

    try {
      // Verificar se IntersectionObserver está disponível
      if (typeof IntersectionObserver === 'undefined') {
        console.warn('IntersectionObserver not supported, using fallback');
        setIsInView(true);
        return;
      }

      const observer = new IntersectionObserver(handleIntersection, {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      });

      observerRef.current = observer;
      observer.observe(element);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
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
      // Fallback: sempre mostrar como inView
      setIsInView(true);
    }
  }, [isMounted, options.threshold, options.rootMargin, options.triggerOnce, handleIntersection, isInView]);

  // Se triggerOnce e já foi acionado, mantém true
  const finalInView = options.triggerOnce && hasTriggered ? true : isInView;

  return [ref, finalInView] as const;
}
