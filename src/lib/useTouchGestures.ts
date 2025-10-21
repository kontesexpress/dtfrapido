import { useEffect, useRef, useState } from 'react';

interface TouchGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onTap?: () => void;
  onDoubleTap?: () => void;
  threshold?: number;
  preventDefault?: boolean;
}

export const useTouchGestures = (options: TouchGestureOptions = {}) => {
  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onTap,
    onDoubleTap,
    threshold = 50,
    preventDefault = true,
  } = options;

  const [touchStart, setTouchStart] = useState<{ x: number; y: number; time: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number; time: number } | null>(null);
  const [lastTap, setLastTap] = useState<number>(0);
  const elementRef = useRef<HTMLElement>(null);

  const handleTouchStart = (e: TouchEvent) => {
    if (preventDefault) {
      e.preventDefault();
    }
    
    const touch = e.touches[0];
    setTouchStart({
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    });
    setTouchEnd(null);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (preventDefault) {
      e.preventDefault();
    }
    
    const touch = e.touches[0];
    setTouchEnd({
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    });
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (preventDefault) {
      e.preventDefault();
    }
    
    if (!touchStart || !touchEnd) return;

    const deltaX = touchEnd.x - touchStart.x;
    const deltaY = touchEnd.y - touchStart.y;
    const deltaTime = touchEnd.time - touchStart.time;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Check for tap
    if (distance < 10 && deltaTime < 300) {
      const now = Date.now();
      if (now - lastTap < 300) {
        // Double tap
        onDoubleTap?.();
        setLastTap(0);
      } else {
        // Single tap
        onTap?.();
        setLastTap(now);
      }
      return;
    }

    // Check for swipe
    if (deltaTime < 300 && distance > threshold) {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > 0) {
          onSwipeRight?.();
        } else {
          onSwipeLeft?.();
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          onSwipeDown?.();
        } else {
          onSwipeUp?.();
        }
      }
    }
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.addEventListener('touchstart', handleTouchStart, { passive: !preventDefault });
    element.addEventListener('touchmove', handleTouchMove, { passive: !preventDefault });
    element.addEventListener('touchend', handleTouchEnd, { passive: !preventDefault });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStart, touchEnd, lastTap]);

  return elementRef;
};

// Hook for swipe navigation
export const useSwipeNavigation = (onSwipeLeft?: () => void, onSwipeRight?: () => void) => {
  return useTouchGestures({
    onSwipeLeft,
    onSwipeRight,
    threshold: 50,
    preventDefault: true,
  });
};

// Hook for carousel navigation
export const useCarouselGestures = (
  onPrevious: () => void,
  onNext: () => void,
  onTap?: () => void
) => {
  return useTouchGestures({
    onSwipeLeft: onNext,
    onSwipeRight: onPrevious,
    onTap,
    threshold: 30,
    preventDefault: false, // Allow default behavior for better UX
  });
};

