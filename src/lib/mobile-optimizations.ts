// Mobile optimizations and touch gestures
export const mobileOptimizations = {
  // Touch-friendly minimum sizes
  minTouchTarget: '44px', // Apple's recommended minimum touch target
  
  // Smooth scrolling for mobile
  smoothScroll: {
    behavior: 'smooth' as ScrollBehavior,
    block: 'start' as ScrollLogicalPosition,
  },
  
  // Touch gesture configurations
  touchGestures: {
    // Swipe thresholds
    swipeThreshold: 50,
    // Pinch zoom prevention for better UX
    preventZoom: true,
    // Touch delay for better responsiveness
    touchDelay: 0,
  },
  
  // Performance optimizations
  performance: {
    // Reduce motion for users who prefer it
    respectMotionPreference: true,
    // Optimize images for mobile
    imageOptimization: {
      quality: 75,
      format: 'webp',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    },
    // Lazy loading for better performance
    lazyLoading: true,
  },
  
  // Mobile-specific breakpoints
  breakpoints: {
    mobile: '320px',
    mobileLarge: '425px',
    tablet: '768px',
    desktop: '1024px',
    desktopLarge: '1280px',
  },
  
  // Touch-friendly spacing
  spacing: {
    touch: '12px', // Minimum spacing between touch targets
    section: '16px', // Section spacing
    component: '8px', // Component internal spacing
  },
};

// Utility functions for mobile optimizations
export const mobileUtils = {
  // Check if device is mobile
  isMobile: (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  },
  
  // Check if device supports touch
  isTouchDevice: (): boolean => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  },
  
  // Get viewport height for mobile (accounting for browser UI)
  getViewportHeight: (): number => {
    if (typeof window === 'undefined') return 0;
    return window.innerHeight;
  },
  
  // Smooth scroll to element
  scrollToElement: (elementId: string): void => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  },
  
  // Prevent zoom on double tap
  preventZoom: (): void => {
    if (typeof window === 'undefined') return;
    
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    }, false);
  },
  
  // Add touch feedback
  addTouchFeedback: (element: HTMLElement): void => {
    if (typeof window === 'undefined') return;
    
    element.addEventListener('touchstart', () => {
      element.style.transform = 'scale(0.98)';
      element.style.transition = 'transform 0.1s ease';
    });
    
    element.addEventListener('touchend', () => {
      element.style.transform = 'scale(1)';
    });
  },
};

// CSS classes for mobile optimizations
export const mobileClasses = {
  // Touch-friendly buttons
  touchButton: 'touch-manipulation min-h-[44px] min-w-[44px]',
  
  // Mobile-optimized text
  mobileText: 'text-sm sm:text-base',
  mobileHeading: 'text-xl sm:text-2xl lg:text-3xl',
  mobileSubheading: 'text-lg sm:text-xl lg:text-2xl',
  
  // Mobile spacing
  mobilePadding: 'px-4 sm:px-6 lg:px-8',
  mobileMargin: 'my-4 sm:my-6 lg:my-8',
  
  // Mobile grid
  mobileGrid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  
  // Mobile flex
  mobileFlex: 'flex-col sm:flex-row',
  
  // Mobile visibility
  mobileOnly: 'block sm:hidden',
  desktopOnly: 'hidden sm:block',
};

// Initialize mobile optimizations
export const initMobileOptimizations = (): void => {
  if (typeof window === 'undefined') return;
  
  // Prevent zoom on double tap
  mobileUtils.preventZoom();
  
  // Add touch feedback to all buttons
  const buttons = document.querySelectorAll('button, [role="button"]');
  buttons.forEach((button) => {
    if (button instanceof HTMLElement) {
      mobileUtils.addTouchFeedback(button);
    }
  });
  
  // Optimize scroll performance
  let ticking = false;
  const optimizeScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Scroll optimization logic here
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', optimizeScroll, { passive: true });
};

