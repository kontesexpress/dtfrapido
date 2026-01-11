// SEO Configuration for DTF Rápido by Kontes Express

export const seoConfig = {
  // Site Information
  site: {
    name: 'DTF Rápido by Kontes Express',
    url: 'https://dtfrapido.com.br',
    description: 'Impressão DTF Premium com brilho, cor e precisão impecável. Tecnologia de ponta para estampas personalizadas de alta qualidade.',
    logo: 'https://dtfrapido.com.br/images/logo.png',
    ogImage: 'https://dtfrapido.com.br/images/og-image.jpg',
    favicon: 'https://dtfrapido.com.br/favicon.ico',
  },

  // Business Information
  business: {
    name: 'Kontes Express',
    phone: '+55-11-96188-5415',
    email: 'kontesexpress@gmail.com',
    address: {
      street: 'R. Bresser, 601 - Brás',
      city: 'São Paulo',
      state: 'SP',
      country: 'BR',
      postalCode: '03017-000',
    },
    coordinates: {
      latitude: -23.5505,
      longitude: -46.6333,
    },
    hours: [
      'Mo-Fr 08:00-17:00',
      'Sa 08:00-12:00',
    ],
    priceRange: '$$',
    paymentMethods: ['Cash', 'Credit Card', 'Debit Card', 'PIX', 'Bank Transfer'],
    currencies: ['BRL'],
  },

  // Social Media
  social: {
    twitter: '@dtfrapido',
    facebook: 'https://facebook.com/dtfrapido',
    instagram: 'https://instagram.com/dtfrapido',
    linkedin: 'https://linkedin.com/company/dtfrapido',
    youtube: 'https://youtube.com/@dtfrapido',
  },

  // SEO Keywords
  keywords: {
    primary: [
      'impressão DTF',
      'DTF premium',
      'DTF São Paulo',
      'personalização',
      'estamparia digital',
      'Kontes Express',
      'DTF Rápido',
    ],
    secondary: [
      'impressão têxtil',
      'estampas personalizadas',
      'camisetas personalizadas',
      'moletons personalizados',
      'bonés personalizados',
      'bolsas personalizadas',
      'tecnologia DTF',
      'qualidade premium',
      'entrega rápida',
      'orçamento grátis',
    ],
    longTail: [
      'impressão DTF São Paulo',
      'personalização camisetas DTF',
      'estamparia digital premium',
      'DTF para empresas',
      'impressão DTF grandes volumes',
      'tecnologia DTF Brasil',
      'qualidade DTF superior',
      'orçamento DTF grátis',
    ],
  },

  // Content Strategy
  content: {
    blogCategories: [
      'Tecnologia DTF',
      'Tendências de Moda',
      'Cuidados com Estampas',
      'Dicas de Personalização',
      'Casos de Sucesso',
    ],
    servicePages: [
      'impressao-dtf',
      'camisetas-personalizadas',
      'moletons-personalizados',
      'bones-personalizados',
      'bolsas-personalizadas',
    ],
    locationPages: [
      'dtf-sao-paulo',
      'dtf-brasil',
      'dtf-regiao-metropolitana',
    ],
  },

  // Technical SEO
  technical: {
    robots: {
      index: true,
      follow: true,
      noarchive: false,
      nosnippet: false,
      noimageindex: false,
      notranslate: false,
    },
    canonical: true,
    hreflang: [
      { code: 'pt-BR', url: 'https://dtfrapido.com' },
      { code: 'en', url: 'https://dtfrapido.com/en' },
    ],
    sitemap: {
      priority: {
        home: 1.0,
        services: 0.9,
        portfolio: 0.8,
        about: 0.8,
        contact: 0.7,
        blog: 0.6,
      },
      changefreq: {
        home: 'daily',
        services: 'weekly',
        portfolio: 'weekly',
        about: 'monthly',
        contact: 'monthly',
        blog: 'weekly',
      },
    },
  },

  // Performance
  performance: {
    targetMetrics: {
      LCP: 2.5, // Largest Contentful Paint
      FID: 100, // First Input Delay
      CLS: 0.1, // Cumulative Layout Shift
      FCP: 1.8, // First Contentful Paint
      TTFB: 600, // Time to First Byte
    },
    imageOptimization: {
      formats: ['webp', 'avif'],
      quality: 85,
      sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    caching: {
      static: 'public, max-age=31536000, immutable',
      dynamic: 'public, max-age=0, must-revalidate',
      api: 'public, max-age=300, s-maxage=300',
    },
  },

  // Analytics
  analytics: {
    googleAnalytics: {
      id: process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID',
      enhancedEcommerce: true,
      customDimensions: [
        { index: 1, name: 'Service Type' },
        { index: 2, name: 'Customer Type' },
        { index: 3, name: 'Order Value' },
      ],
    },
    metaPixel: {
      id: process.env.NEXT_PUBLIC_META_PIXEL_ID || 'META_PIXEL_ID',
      events: [
        'PageView',
        'Lead',
        'Purchase',
        'AddToCart',
        'InitiateCheckout',
      ],
    },
    customEvents: [
      'quote_request',
      'contact_form_submit',
      'portfolio_view',
      'price_plan_view',
      'ai_chat_open',
    ],
  },

  // Local SEO
  localSEO: {
    googleMyBusiness: {
      id: 'your-gmb-id',
      name: 'DTF Rápido by Kontes Express',
      address: 'São Paulo, SP, Brasil',
      phone: '+55-11-96188-5415',
      website: 'https://dtfrapido.com.br',
      categories: ['Printing Service', 'Custom Apparel', 'Textile Printing'],
    },
    schema: {
      localBusiness: true,
      organization: true,
      product: true,
      service: true,
      review: true,
      faq: true,
    },
  },
};

// Helper functions
export function generateCanonicalUrl(path: string = ''): string {
  return `${seoConfig.site.url}${path}`;
}

export function generateOgImageUrl(title: string): string {
  const params = new URLSearchParams({
    title: title,
    site: seoConfig.site.name,
    theme: 'dark',
  });
  return `${seoConfig.site.url}/api/og?${params.toString()}`;
}

export function generateBreadcrumbSchema(items: Array<{ name: string, url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string, answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
