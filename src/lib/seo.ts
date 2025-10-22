import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const defaultSEO: SEOConfig = {
  title: 'DTF Rápido by Kontes Express - Impressão DTF Premium',
  description: 'Impressão DTF Premium com brilho, cor e precisão impecável. Tecnologia de ponta para estampas personalizadas de alta qualidade em São Paulo.',
  keywords: [
    'impressão DTF',
    'DTF premium',
    'DTF São Paulo',
    'personalização',
    'estamparia digital',
    'Kontes Express',
    'DTF Rápido',
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
  canonical: 'https://dtfrapido.com.br',
  ogImage: 'https://dtfrapido.com.br/images/og-image.jpg',
};

export function generateMetadata(config: Partial<SEOConfig> = {}): Metadata {
  const seo = { ...defaultSEO, ...config };
  
  return {
    title: {
      default: seo.title,
      template: `%s | ${defaultSEO.title}`,
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: 'Kontes Express' }],
    creator: 'Evergreen MKT / Kontes Express',
    publisher: 'Kontes Express',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://dtfrapido.com.br'),
    alternates: {
      canonical: seo.canonical || defaultSEO.canonical,
    },
    robots: {
      index: !seo.noindex,
      follow: !seo.nofollow,
      googleBot: {
        index: !seo.noindex,
        follow: !seo.nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: seo.canonical || defaultSEO.canonical,
      title: seo.title,
      description: seo.description,
      siteName: 'DTF Rápido by Kontes Express',
      images: [
        {
          url: seo.ogImage || defaultSEO.ogImage!,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage || defaultSEO.ogImage!],
      creator: '@dtfrapido',
      site: '@dtfrapido',
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    },
    category: 'business',
    classification: 'Impressão DTF Premium',
    other: {
      'geo.region': 'BR-SP',
      'geo.placename': 'São Paulo',
      'geo.position': '-23.5505;-46.6333',
      'ICBM': '-23.5505, -46.6333',
      'DC.title': seo.title,
      'DC.description': seo.description,
      'DC.subject': seo.keywords.join(', '),
      'DC.creator': 'Kontes Express',
      'DC.publisher': 'Kontes Express',
      'DC.date.created': '2025-01-01',
      'DC.date.modified': new Date().toISOString().split('T')[0],
      'DC.language': 'pt-BR',
      'DC.type': 'Text',
      'DC.format': 'text/html',
      'DC.identifier': seo.canonical || defaultSEO.canonical || 'https://dtfrapido.com.br',
      'DC.coverage': 'São Paulo, SP, Brasil',
      'DC.rights': '© 2025 Kontes Express. Todos os direitos reservados.',
    },
  };
}

export const pageSEOConfigs = {
  home: {
    title: 'DTF Rápido by Kontes Express - Impressão DTF Premium',
    description: 'Impressão DTF Premium com brilho, cor e precisão impecável. Tecnologia de ponta para estampas personalizadas de alta qualidade em São Paulo. Orçamento grátis!',
    keywords: [
      'impressão DTF',
      'DTF premium',
      'DTF São Paulo',
      'personalização',
      'estamparia digital',
      'Kontes Express',
      'DTF Rápido',
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
      'impressão digital',
      'estamparia São Paulo',
      'personalização roupas',
      'DTF Brasil',
    ],
  },
  about: {
    title: 'Sobre Nós - DTF Rápido by Kontes Express',
    description: 'Conheça a história da Kontes Express, líder em impressão DTF premium no Brasil. Mais de 8 anos de experiência, qualidade superior e tecnologia de ponta.',
    keywords: [
      'sobre kontes express',
      'história empresa DTF',
      'equipe impressão DTF',
      'tecnologia DTF Brasil',
      'empresa DTF São Paulo',
      'experiência DTF',
      'qualidade DTF',
      'tecnologia impressão',
    ],
  },
  prices: {
    title: 'Preços DTF - Planos Transparentes | Kontes Express',
    description: 'Confira nossos preços transparentes para impressão DTF. Planos Básico (R$ 15), Premium (R$ 12) e Enterprise (R$ 8). Entrega rápida e qualidade superior.',
    keywords: [
      'preços DTF',
      'cotação impressão DTF',
      'planos DTF',
      'orçamento DTF',
      'preço impressão DTF',
      'custo DTF',
      'valor impressão',
      'preços estamparia',
      'orçamento grátis DTF',
    ],
  },
  portfolio: {
    title: 'Portfólio DTF - Trabalhos Realizados | Kontes Express',
    description: 'Explore nosso portfólio de trabalhos realizados com impressão DTF. Veja exemplos de camisetas, moletons, bonés e bolsas personalizadas com qualidade premium.',
    keywords: [
      'portfólio DTF',
      'trabalhos DTF',
      'exemplos impressão DTF',
      'galeria DTF',
      'projetos DTF',
      'trabalhos realizados',
      'exemplos estampas',
      'galeria impressão',
    ],
  },
  contact: {
    title: 'Contato DTF - Orçamento Grátis | Kontes Express',
    description: 'Entre em contato conosco para solicitar seu orçamento gratuito de impressão DTF. Atendimento especializado, suporte técnico e entrega rápida em São Paulo.',
    keywords: [
      'contato DTF',
      'orçamento DTF',
      'solicitar cotação',
      'atendimento DTF',
      'contato impressão',
      'orçamento grátis',
      'solicitar orçamento',
      'atendimento São Paulo',
    ],
  },
};
