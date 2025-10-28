'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function ModernBackground() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = containerRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isMounted]);

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let mouse = { x: 0, y: 0 };
    let time = 0;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = this.getRandomColor();
        this.opacity = Math.random() * 0.8 + 0.2;
        this.life = 0;
        this.maxLife = Math.random() * 300 + 200;
      }

      getRandomColor() {
        const colors = [
          '#ffd700', // Gold
          '#00ff88', // Neon green
          '#ff0080', // Neon pink
          '#0080ff', // Neon blue
          '#ff8000', // Neon orange
          '#8000ff', // Neon purple
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Fade out over time
        this.opacity = Math.max(0, 1 - (this.life / this.maxLife));

        // Add some randomness
        this.vx += (Math.random() - 0.5) * 0.1;
        this.vy += (Math.random() - 0.5) * 0.1;

        // Limit velocity
        const maxVel = 2;
        this.vx = Math.max(-maxVel, Math.min(maxVel, this.vx));
        this.vy = Math.max(-maxVel, Math.min(maxVel, this.vy));
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);

        // Remove dead particles
        if (particle.life >= particle.maxLife) {
          particles.splice(index, 1);
          particles.push(new Particle());
        }
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Draw morphing geometric shapes
      drawMorphingShapes(ctx, time);

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawMorphingShapes = (ctx: CanvasRenderingContext2D, time: number) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 200 + Math.sin(time * 2) * 50;

      // Draw multiple morphing shapes
      for (let i = 0; i < 3; i++) {
        const angle = (time * 0.5 + i * Math.PI * 2 / 3) % (Math.PI * 2);
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        const size = 20 + Math.sin(time * 3 + i) * 10;

        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = i === 0 ? '#ffd700' : i === 1 ? '#00ff88' : '#ff0080';
        ctx.shadowBlur = 20;
        ctx.shadowColor = ctx.fillStyle;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }

      // Draw central morphing hexagon
      ctx.save();
      ctx.globalAlpha = 0.2;
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#ffd700';
      
      ctx.beginPath();
      const sides = 6;
      const hexRadius = 100 + Math.sin(time * 1.5) * 30;
      for (let i = 0; i < sides; i++) {
        const angle = (i * Math.PI * 2 / sides) + time;
        const x = centerX + Math.cos(angle) * hexRadius;
        const y = centerY + Math.sin(angle) * hexRadius;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();
      
      ctx.restore();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    // Initialize
    resizeCanvas();
    initParticles();
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible]);

  if (!isMounted) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500"></div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      {/* Canvas for particles and morphing shapes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/30 to-dark-900/80" />
      
      {/* Animated geometric patterns */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-gold-500/20 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Floating neon elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-gold-500 to-green-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Central glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-96 h-96 bg-gradient-radial from-gold-500/20 via-transparent to-transparent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}
