// Configurações do Sistema de Avaliações
// Ajuste os intervalos conforme necessário

export const REVIEWS_CONFIG = {
  // Intervalo de atualização (em horas)
  UPDATE_INTERVAL_HOURS: 24, // 24 horas por padrão
  
  // Intervalos alternativos
  INTERVALS: {
    FREQUENT: 6,    // 6 horas - para testes
    DAILY: 24,      // 24 horas - padrão
    WEEKLY: 168,    // 7 dias
    MONTHLY: 720,   // 30 dias
  },
  
  // Configurações de cache
  CACHE: {
    STORAGE_KEY: 'google-reviews-cache',
    MAX_AGE: 7 * 24 * 60 * 60 * 1000, // 7 dias em ms
  },
  
  // Configurações de scraping
  SCRAPING: {
    MAX_RETRIES: 3,
    RETRY_DELAY: 5000, // 5 segundos
    TIMEOUT: 30000,   // 30 segundos
  },
  
  // URLs e seletores
  SELECTORS: {
    REVIEW_CONTAINER: '[data-review-id]',
    AUTHOR_NAME: '.d4r55',
    RATING: '.kvMYJc',
    TEXT: '.MyEned',
    DATE: '.rsqaWe',
    PHOTOS: '.review-photo',
  },
  
  // Configurações de UI
  UI: {
    AUTO_ROTATE_INTERVAL: 5000, // 5 segundos
    ANIMATION_DURATION: 300,
    LOADING_TIMEOUT: 10000, // 10 segundos
  },
  
  // Configurações de desenvolvimento
  DEV: {
    ENABLE_LOGGING: true,
    MOCK_DATA: false, // Use dados mock em desenvolvimento
    FORCE_UPDATE: false, // Força atualização em desenvolvimento
  }
};

// Função para obter configuração baseada no ambiente
export const getReviewsConfig = () => {
  const isDev = process.env.NODE_ENV === 'development';
  
  return {
    ...REVIEWS_CONFIG,
    UPDATE_INTERVAL_HOURS: isDev ? REVIEWS_CONFIG.INTERVALS.FREQUENT : REVIEWS_CONFIG.UPDATE_INTERVAL_HOURS,
    DEV: {
      ...REVIEWS_CONFIG.DEV,
      ENABLE_LOGGING: isDev,
    }
  };
};

// Função para validar configurações
export const validateConfig = (config: typeof REVIEWS_CONFIG) => {
  const errors: string[] = [];
  
  if (config.UPDATE_INTERVAL_HOURS < 1) {
    errors.push('Intervalo de atualização deve ser pelo menos 1 hora');
  }
  
  if (config.SCRAPING.MAX_RETRIES < 1) {
    errors.push('Número de tentativas deve ser pelo menos 1');
  }
  
  if (config.SCRAPING.TIMEOUT < 5000) {
    errors.push('Timeout deve ser pelo menos 5 segundos');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Função para obter status da configuração
export const getConfigStatus = () => {
  const config = getReviewsConfig();
  const validation = validateConfig(config);
  
  return {
    config,
    validation,
    nextUpdate: new Date(Date.now() + (config.UPDATE_INTERVAL_HOURS * 60 * 60 * 1000)),
    isDev: process.env.NODE_ENV === 'development',
  };
};

