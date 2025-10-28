'use client';

import { useEffect } from 'react';

export function VideoOptimizer() {
  useEffect(() => {
    // Otimizar vídeos quando a página carrega
    const optimizeVideos = () => {
      const videos = document.querySelectorAll('video');
      
      videos.forEach((video) => {
        // Configurar atributos de performance
        video.setAttribute('preload', 'metadata');
        video.setAttribute('loading', 'lazy');
        
        // Pausar vídeos fora da viewport
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                if (video.autoplay && video.paused) {
                  video.play().catch(() => {
                    // Ignorar erros de autoplay
                  });
                }
              } else {
                if (!video.paused) {
                  video.pause();
                }
              }
            });
          },
          { threshold: 0.1 }
        );
        
        observer.observe(video);
      });
    };

    // Executar otimização após carregamento
    if (document.readyState === 'complete') {
      optimizeVideos();
    } else {
      window.addEventListener('load', optimizeVideos);
    }

    return () => {
      window.removeEventListener('load', optimizeVideos);
    };
  }, []);

  return null;
}

