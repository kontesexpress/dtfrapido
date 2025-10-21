import { useEffect, useState, useCallback } from 'react';

interface ViewportInfo {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  orientation: 'portrait' | 'landscape';
  safeAreaInsets: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export const useMobileViewport = (): ViewportInfo => {
  const [viewport, setViewport] = useState<ViewportInfo>({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    orientation: 'portrait',
    safeAreaInsets: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  const updateViewport = useCallback(() => {
    if (typeof window === 'undefined') return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;
    const orientation = height > width ? 'portrait' : 'landscape';

    // Get safe area insets for mobile devices
    const safeAreaInsets = {
      top: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sat') || '0'),
      right: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sar') || '0'),
      bottom: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sab') || '0'),
      left: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sal') || '0'),
    };

    setViewport({
      width,
      height,
      isMobile,
      isTablet,
      isDesktop,
      orientation,
      safeAreaInsets,
    });
  }, []);

  useEffect(() => {
    updateViewport();

    const handleResize = () => {
      updateViewport();
    };

    const handleOrientationChange = () => {
      // Delay to ensure accurate measurements after orientation change
      setTimeout(updateViewport, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [updateViewport]);

  return viewport;
};

// Hook for mobile-specific CSS classes
export const useMobileClasses = () => {
  const { isMobile, isTablet, isDesktop, orientation } = useMobileViewport();

  const getResponsiveClasses = useCallback((classes: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
    portrait?: string;
    landscape?: string;
  }) => {
    let responsiveClasses = '';

    if (isMobile && classes.mobile) {
      responsiveClasses += ` ${classes.mobile}`;
    }
    if (isTablet && classes.tablet) {
      responsiveClasses += ` ${classes.tablet}`;
    }
    if (isDesktop && classes.desktop) {
      responsiveClasses += ` ${classes.desktop}`;
    }
    if (orientation === 'portrait' && classes.portrait) {
      responsiveClasses += ` ${classes.portrait}`;
    }
    if (orientation === 'landscape' && classes.landscape) {
      responsiveClasses += ` ${classes.landscape}`;
    }

    return responsiveClasses.trim();
  }, [isMobile, isTablet, isDesktop, orientation]);

  return {
    isMobile,
    isTablet,
    isDesktop,
    orientation,
    getResponsiveClasses,
  };
};

// Hook for mobile navigation
export const useMobileNavigation = () => {
  const { isMobile } = useMobileViewport();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, closeMenu]);

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    openMenu,
    isMobile,
  };
};

// Hook for mobile gestures
export const useMobileGestures = () => {
  const { isMobile } = useMobileViewport();
  const [gestureState, setGestureState] = useState({
    isScrolling: false,
    isZooming: false,
    isRotating: false,
  });

  useEffect(() => {
    if (!isMobile) return;

    let touchStartTime = 0;
    let touchStartDistance = 0;
    let touchStartAngle = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartTime = Date.now();
      
      if (e.touches.length === 2) {
        // Two finger gesture
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        
        touchStartDistance = Math.sqrt(
          Math.pow(touch2.clientX - touch1.clientX, 2) +
          Math.pow(touch2.clientY - touch1.clientY, 2)
        );
        
        touchStartAngle = Math.atan2(
          touch2.clientY - touch1.clientY,
          touch2.clientX - touch1.clientX
        );
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        
        const currentDistance = Math.sqrt(
          Math.pow(touch2.clientX - touch1.clientX, 2) +
          Math.pow(touch2.clientY - touch1.clientY, 2)
        );
        
        const currentAngle = Math.atan2(
          touch2.clientY - touch1.clientY,
          touch2.clientX - touch1.clientX
        );
        
        const distanceChange = Math.abs(currentDistance - touchStartDistance);
        const angleChange = Math.abs(currentAngle - touchStartAngle);
        
        if (distanceChange > 10) {
          setGestureState(prev => ({ ...prev, isZooming: true }));
        }
        
        if (angleChange > 0.1) {
          setGestureState(prev => ({ ...prev, isRotating: true }));
        }
      } else if (e.touches.length === 1) {
        setGestureState(prev => ({ ...prev, isScrolling: true }));
      }
    };

    const handleTouchEnd = () => {
      setGestureState({
        isScrolling: false,
        isZooming: false,
        isRotating: false,
      });
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);

  return gestureState;
};

