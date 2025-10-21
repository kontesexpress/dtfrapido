// Sistema de Agendamento de Web Scraping
// Atualiza avaliações periodicamente sem sobrecarregar

import { useState, useEffect } from 'react';
import { GoogleReviewsScraper } from './google-scraper';
import { getReviewsConfig } from './reviews-config';

export interface ReviewsCache {
  reviews: any[];
  lastUpdated: number;
  nextUpdate: number;
  updateInterval: number; // em milissegundos
}

export class ReviewsScheduler {
  private cache: ReviewsCache = {
    reviews: [],
    lastUpdated: 0,
    nextUpdate: 0,
    updateInterval: 24 * 60 * 60 * 1000, // 24 horas por padrão
  };

  private scraper: GoogleReviewsScraper;
  private isRunning: boolean = false;

  constructor(updateIntervalHours?: number) {
    const config = getReviewsConfig();
    this.scraper = new GoogleReviewsScraper();
    this.cache.updateInterval = (updateIntervalHours || config.UPDATE_INTERVAL_HOURS) * 60 * 60 * 1000;
    this.cache.nextUpdate = Date.now() + this.cache.updateInterval;
  }

  // Inicializa o agendador
  async initialize(): Promise<void> {
    console.log('🔄 Inicializando agendador de avaliações...');
    
    // Carrega cache existente
    await this.loadCache();
    
    // Verifica se precisa atualizar
    if (this.shouldUpdate()) {
      console.log('📥 Atualizando avaliações...');
      await this.updateReviews();
    } else {
      console.log(`⏰ Próxima atualização em: ${this.getTimeUntilNextUpdate()}`);
    }

    // Inicia o agendador
    this.startScheduler();
  }

  // Verifica se deve atualizar
  private shouldUpdate(): boolean {
    return Date.now() >= this.cache.nextUpdate;
  }

  // Atualiza as avaliações
  async updateReviews(): Promise<void> {
    try {
      console.log('🔄 Buscando novas avaliações...');
      
      const newReviews = await this.scraper.scrapeReviews();
      
      this.cache.reviews = newReviews;
      this.cache.lastUpdated = Date.now();
      this.cache.nextUpdate = Date.now() + this.cache.updateInterval;
      
      // Salva no cache
      await this.saveCache();
      
      console.log(`✅ Avaliações atualizadas: ${newReviews.length} encontradas`);
      console.log(`⏰ Próxima atualização: ${new Date(this.cache.nextUpdate).toLocaleString()}`);
      
    } catch (error) {
      console.error('❌ Erro ao atualizar avaliações:', error);
    }
  }

  // Inicia o agendador
  private startScheduler(): void {
    if (this.isRunning) return;
    
    this.isRunning = true;
    
    // Verifica a cada hora se precisa atualizar
    setInterval(async () => {
      if (this.shouldUpdate()) {
        await this.updateReviews();
      }
    }, 60 * 60 * 1000); // 1 hora
    
    console.log('⏰ Agendador iniciado - verificando a cada hora');
  }

  // Obtém as avaliações (do cache ou atualiza se necessário)
  async getReviews(): Promise<any[]> {
    if (this.shouldUpdate()) {
      await this.updateReviews();
    }
    
    return this.cache.reviews;
  }

  // Força atualização imediata
  async forceUpdate(): Promise<void> {
    console.log('🔄 Forçando atualização das avaliações...');
    await this.updateReviews();
  }

  // Carrega cache do localStorage
  private async loadCache(): Promise<void> {
    if (typeof window === 'undefined') return;
    
    try {
      const cached = localStorage.getItem('google-reviews-cache');
      if (cached) {
        const parsed = JSON.parse(cached);
        this.cache = { ...this.cache, ...parsed };
        console.log('📦 Cache carregado do localStorage');
      }
    } catch (error) {
      console.error('❌ Erro ao carregar cache:', error);
    }
  }

  // Salva cache no localStorage
  private async saveCache(): Promise<void> {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem('google-reviews-cache', JSON.stringify(this.cache));
      console.log('💾 Cache salvo no localStorage');
    } catch (error) {
      console.error('❌ Erro ao salvar cache:', error);
    }
  }

  // Obtém tempo até próxima atualização
  getTimeUntilNextUpdate(): string {
    const now = Date.now();
    const diff = this.cache.nextUpdate - now;
    
    if (diff <= 0) return 'Agora';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${minutes}m`;
    }
  }

  // Obtém status do agendador
  getStatus(): {
    isRunning: boolean;
    lastUpdated: string;
    nextUpdate: string;
    reviewsCount: number;
    timeUntilNext: string;
  } {
    return {
      isRunning: this.isRunning,
      lastUpdated: new Date(this.cache.lastUpdated).toLocaleString(),
      nextUpdate: new Date(this.cache.nextUpdate).toLocaleString(),
      reviewsCount: this.cache.reviews.length,
      timeUntilNext: this.getTimeUntilNextUpdate(),
    };
  }

  // Para o agendador
  stop(): void {
    this.isRunning = false;
    console.log('⏹️ Agendador parado');
  }
}

// Instância global do agendador
export const reviewsScheduler = new ReviewsScheduler(); // Usa configuração padrão

// Hook para usar no React
export const useReviewsScheduler = () => {
  const [status, setStatus] = useState(reviewsScheduler.getStatus());
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeScheduler = async () => {
      try {
        setLoading(true);
        await reviewsScheduler.initialize();
        const reviewsData = await reviewsScheduler.getReviews();
        setReviews(reviewsData);
        setStatus(reviewsScheduler.getStatus());
      } catch (error) {
        console.error('Erro ao inicializar agendador:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeScheduler();

    // Atualiza status a cada minuto
    const interval = setInterval(() => {
      setStatus(reviewsScheduler.getStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const forceUpdate = async () => {
    setLoading(true);
    await reviewsScheduler.forceUpdate();
    const reviewsData = await reviewsScheduler.getReviews();
    setReviews(reviewsData);
    setStatus(reviewsScheduler.getStatus());
    setLoading(false);
  };

  return {
    reviews,
    status,
    loading,
    forceUpdate,
  };
};
