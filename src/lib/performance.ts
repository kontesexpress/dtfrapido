// Performance optimization utilities for SEO

export const performanceConfig = {
  // Image optimization
  images: {
    domains: [
      'dtfrapido.com',
      'images.unsplash.com',
      'via.placeholder.com',
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Critical resources to preload
  criticalResources: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      as: 'style',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap',
      as: 'style',
    },
    {
      href: '/images/og-image.jpg',
      as: 'image',
    },
  ],
  
  // Lazy loading configuration
  lazyLoading: {
    threshold: 0.1,
    rootMargin: '50px',
  },
  
  // Cache configuration
  cache: {
    static: 'public, max-age=31536000, immutable',
    dynamic: 'public, max-age=0, must-revalidate',
    api: 'public, max-age=300, s-maxage=300',
  },
};

// Web Vitals tracking
export function trackWebVitals(metric: any) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
}

// Performance monitoring
export function monitorPerformance() {
  if (typeof window === 'undefined') return;

  // Monitor Core Web Vitals using native APIs
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            trackWebVitals({ name: 'LCP', value: entry.startTime, id: 'lcp' });
          } else if (entry.entryType === 'first-input') {
            const fidEntry = entry as any;
            trackWebVitals({ name: 'FID', value: fidEntry.processingStart - fidEntry.startTime, id: 'fid' });
          } else if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as any;
            trackWebVitals({ name: 'CLS', value: clsEntry.value, id: 'cls' });
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (error) {
      console.warn('Performance monitoring not available:', error);
    }
  }

  // Monitor page load time
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_load_time', {
        event_category: 'Performance',
        event_label: 'Page Load',
        value: Math.round(loadTime),
      });
    }
  });

  // Monitor resource loading
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'resource') {
        const resource = entry as PerformanceResourceTiming;
        if (resource.duration > 1000) { // Log slow resources
          console.warn('Slow resource detected:', {
            name: resource.name,
            duration: resource.duration,
            size: resource.transferSize,
          });
        }
      }
    });
  });

  observer.observe({ entryTypes: ['resource'] });
}

// Image optimization
export function optimizeImage(src: string, width?: number, height?: number, quality = 75) {
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('q', quality.toString());
  params.set('f', 'webp');
  
  return `${src}?${params.toString()}`;
}

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  performanceConfig.criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.as === 'style') {
      link.onload = () => {
        link.rel = 'stylesheet';
      };
    }
    document.head.appendChild(link);
  });
}

// Optimize third-party scripts
export function optimizeThirdPartyScripts() {
  if (typeof window === 'undefined') return;

  // Defer non-critical scripts
  const scripts = document.querySelectorAll('script[src]');
  scripts.forEach((script) => {
    if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
      script.setAttribute('defer', '');
    }
  });

  // Lazy load non-critical images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// SEO-friendly URL generation
export function generateSEOFriendlyURL(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

// Meta tag optimization
export function optimizeMetaTags() {
  if (typeof window === 'undefined') return;

  // Add missing alt attributes
  const images = document.querySelectorAll('img:not([alt])');
  images.forEach((img) => {
    img.setAttribute('alt', 'Imagem DTF Rápido by Kontes Express');
  });

  // Add missing title attributes to links
  const links = document.querySelectorAll('a:not([title])');
  links.forEach((link) => {
    if (link.textContent) {
      link.setAttribute('title', link.textContent.trim());
    }
  });

  // Optimize external links
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  externalLinks.forEach((link) => {
    if (!link.hasAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
}
