import { useEffect, useState, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  isLowEndDevice: boolean;
  isSlowConnection: boolean;
  shouldReduceMotion: boolean;
  shouldOptimizeImages: boolean;
  recommendedQuality: number;
}

export const useMobilePerformance = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    isLowEndDevice: false,
    isSlowConnection: false,
    shouldReduceMotion: false,
    shouldOptimizeImages: true,
    recommendedQuality: 75,
  });

  const detectDeviceCapabilities = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Check for low-end device indicators
    const isLowEndDevice = 
      navigator.hardwareConcurrency <= 2 || // Low CPU cores
      (navigator as any).deviceMemory <= 4 || // Low RAM (if available)
      window.innerWidth < 768; // Small screen

    // Check for slow connection
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    const isSlowConnection = connection ? 
      connection.effectiveType === 'slow-2g' || 
      connection.effectiveType === '2g' || 
      connection.effectiveType === '3g' : false;

    // Check for reduced motion preference
    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Determine image optimization settings
    const shouldOptimizeImages = isLowEndDevice || isSlowConnection;
    const recommendedQuality = isLowEndDevice ? 60 : isSlowConnection ? 70 : 85;

    setMetrics({
      isLowEndDevice,
      isSlowConnection,
      shouldReduceMotion,
      shouldOptimizeImages,
      recommendedQuality,
    });
  }, []);

  useEffect(() => {
    detectDeviceCapabilities();

    // Listen for connection changes
    const connection = (navigator as any).connection;
    if (connection) {
      connection.addEventListener('change', detectDeviceCapabilities);
      return () => connection.removeEventListener('change', detectDeviceCapabilities);
    }
  }, [detectDeviceCapabilities]);

  return metrics;
};

// Hook for lazy loading optimization
export const useLazyLoading = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasLoaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, hasLoaded]);

  return { elementRef, isVisible, hasLoaded };
};

// Hook for image optimization
export const useImageOptimization = () => {
  const { shouldOptimizeImages, recommendedQuality } = useMobilePerformance();

  const getOptimizedImageProps = useCallback((src: string, alt: string) => {
    return {
      src,
      alt,
      quality: shouldOptimizeImages ? recommendedQuality : 90,
      priority: false,
      loading: 'lazy' as const,
      sizes: shouldOptimizeImages 
        ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw',
    };
  }, [shouldOptimizeImages, recommendedQuality]);

  return { getOptimizedImageProps, shouldOptimizeImages, recommendedQuality };
};

// Hook for animation optimization
export const useAnimationOptimization = () => {
  const { shouldReduceMotion } = useMobilePerformance();

  const getAnimationProps = useCallback((defaultProps: any, reducedProps: any = {}) => {
    return shouldReduceMotion ? reducedProps : defaultProps;
  }, [shouldReduceMotion]);

  const shouldAnimate = useCallback(() => {
    return !shouldReduceMotion;
  }, [shouldReduceMotion]);

  return { getAnimationProps, shouldAnimate, shouldReduceMotion };
};

// Hook for scroll optimization
export const useScrollOptimization = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          setIsScrolling(true);
          setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
          lastScrollY.current = currentScrollY;
          
          // Reset scrolling state after a delay
          setTimeout(() => setIsScrolling(false), 150);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isScrolling, scrollDirection };
};
