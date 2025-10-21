'use client';

import { useEffect } from 'react';
import { trackScrollDepth, trackTimeOnPage } from '@/lib/analytics';

export function PerformanceOptimizer() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Track scroll depth for SEO insights
    let maxScrollDepth = 0;
    const trackScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / scrollHeight) * 100);
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        
        // Track milestones
        if (scrollPercent >= 25 && maxScrollDepth < 25) {
          trackScrollDepth(25);
        } else if (scrollPercent >= 50 && maxScrollDepth < 50) {
          trackScrollDepth(50);
        } else if (scrollPercent >= 75 && maxScrollDepth < 75) {
          trackScrollDepth(75);
        } else if (scrollPercent >= 90 && maxScrollDepth < 90) {
          trackScrollDepth(90);
        }
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTime = () => {
      const timeOnPage = Date.now() - startTime;
      if (timeOnPage >= 30000) { // 30 seconds
        trackTimeOnPage(timeOnPage);
      }
    };

    // Add event listeners
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', trackScroll, { passive: true });
    }
    const timeInterval = setInterval(trackTime, 10000); // Check every 10 seconds

    // Preload critical resources
    const preloadCriticalResources = () => {
      if (typeof document === 'undefined') return;
      
      // Preload critical images
      const criticalImages = [
        '/images/og-image.jpg',
        '/images/hero-bg.jpg',
        '/images/logo.png',
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload critical fonts
      const criticalFonts = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap',
      ];

      criticalFonts.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    // Optimize images for SEO
    const optimizeImages = () => {
      if (typeof document === 'undefined') return;
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" for non-critical images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add alt text if missing
        if (!img.hasAttribute('alt')) {
          img.setAttribute('alt', 'Imagem DTF Rápido by Kontes Express');
        }
        
        // Add width and height for layout stability
        if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
          img.setAttribute('width', '800');
          img.setAttribute('height', '600');
        }
      });
    };

    // Optimize links for SEO
    const optimizeLinks = () => {
      if (typeof document === 'undefined' || typeof window === 'undefined') return;
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        // Add rel="noopener" for external links
        if (link.hostname !== window.location.hostname) {
          link.setAttribute('rel', 'noopener noreferrer');
        }
        
        // Add title attribute for better accessibility
        if (!link.hasAttribute('title') && link.textContent) {
          link.setAttribute('title', link.textContent.trim());
        }
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeLinks();

    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', trackScroll);
      }
      clearInterval(timeInterval);
    };
  }, []);

  return null;
}
