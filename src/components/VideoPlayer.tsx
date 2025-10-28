'use client';

import { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  lazy?: boolean;
  onLoadStart?: () => void;
  onCanPlay?: () => void;
  onError?: () => void;
}

export function VideoPlayer({
  src,
  poster,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
  lazy = true,
  onLoadStart,
  onCanPlay,
  onError,
}: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (!lazy || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [lazy]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isInView) return;

    const handleLoadStart = () => {
      setIsLoading(true);
      setHasError(false);
      onLoadStart?.();
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      onCanPlay?.();
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
      onError?.();
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [isInView, onLoadStart, onCanPlay, onError]);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-dark-800 ${className}`}>
        <div className="text-center text-gray-400">
          <p>Erro ao carregar vídeo</p>
          <p className="text-sm">Verifique sua conexão</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-800 z-10">
          <div className="text-center text-gray-400">
            <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <p className="text-sm">Carregando vídeo...</p>
          </div>
        </div>
      )}
      
      {isInView ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center"
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          controls={controls}
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      ) : (
        <div className="w-full h-full bg-dark-800 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Carregando...</div>
        </div>
      )}
    </div>
  );
}
