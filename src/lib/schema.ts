export interface SchemaConfig {
  type: 'LocalBusiness' | 'Organization' | 'Product' | 'Service' | 'WebSite' | 'BreadcrumbList';
  data: any;
}

export const baseSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'DTF Rápido by Kontes Express',
  alternateName: 'Kontes Express',
  description: 'Impressão DTF Premium com brilho, cor e precisão impecável. Tecnologia de ponta para estampas personalizadas de alta qualidade.',
  url: 'https://dtfrapido.com.br',
  logo: 'https://dtfrapido.com.br/images/logo.png',
  image: 'https://dtfrapido.com.br/images/og-image.jpg',
  telephone: '+55-11-91900-9112',
  email: 'kontesexpress@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Bresser, 601 - Brás',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '03017-000',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.5505,
    longitude: -46.6333,
  },
  openingHours: [
    'Mo-Fr 08:00-17:00',
    'Sa 08:00-12:00',
  ],
  priceRange: '$$',
  paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'PIX', 'Bank Transfer'],
  currenciesAccepted: 'BRL',
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Maria Silva',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'Excelente qualidade! As estampas ficaram perfeitas e a durabilidade é impressionante.',
      datePublished: '2024-12-01',
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'João Santos',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'A tecnologia DTF superou todas as minhas expectativas. Cores vibrantes e acabamento impecável.',
      datePublished: '2024-11-15',
    },
  ],
  sameAs: [
    'https://www.instagram.com/dtfrapido',
    'https://www.facebook.com/dtfrapido',
    'https://www.linkedin.com/company/dtfrapido',
    'https://www.twitter.com/dtfrapido',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Impressão DTF',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Impressão DTF Básica',
          description: 'Serviço de impressão DTF para até 10 peças com cores básicas',
          provider: {
            '@type': 'LocalBusiness',
            name: 'DTF Rápido by Kontes Express',
          },
        },
        price: '15.00',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        validFrom: '2025-01-01',
        validThrough: '2025-12-31',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Impressão DTF Premium',
          description: 'Serviço de impressão DTF premium para até 50 peças com cores vibrantes',
          provider: {
            '@type': 'LocalBusiness',
            name: 'DTF Rápido by Kontes Express',
          },
        },
        price: '12.00',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        validFrom: '2025-01-01',
        validThrough: '2025-12-31',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Impressão DTF Enterprise',
          description: 'Serviço de impressão DTF para grandes volumes com desconto progressivo',
          provider: {
            '@type': 'LocalBusiness',
            name: 'DTF Rápido by Kontes Express',
          },
        },
        price: '8.00',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        validFrom: '2025-01-01',
        validThrough: '2025-12-31',
      },
    ],
  },
  potentialAction: [
    {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://dtfrapido.com.br/contact',
        actionPlatform: [
          'https://schema.org/DesktopWebPlatform',
          'https://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'Reservation',
        name: 'Solicitação de Orçamento DTF',
      },
    },
    {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://dtfrapido.com.br/search?q={search_term_string}',
        actionPlatform: [
          'https://schema.org/DesktopWebPlatform',
          'https://schema.org/MobileWebPlatform',
        ],
      },
      'query-input': 'required name=search_term_string',
    },
  ],
  mainEntity: {
    '@type': 'WebSite',
    name: 'DTF Rápido by Kontes Express',
    url: 'https://dtfrapido.com.br',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://dtfrapido.com.br/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DTF Rápido by Kontes Express',
  url: 'https://dtfrapido.com.br',
  description: 'Impressão DTF Premium com brilho, cor e precisão impecável',
  publisher: {
    '@type': 'Organization',
    name: 'Kontes Express',
    url: 'https://dtfrapido.com.br',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://dtfrapido.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const productSchema = (product: {
  name: string;
  description: string;
  price: number;
  currency: string;
  availability: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image || 'https://dtfrapido.com.br/images/product-default.jpg',
  offers: {
    '@type': 'Offer',
    price: product.price,
    priceCurrency: product.currency,
    availability: product.availability,
    seller: {
      '@type': 'LocalBusiness',
      name: 'DTF Rápido by Kontes Express',
    },
  },
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  price?: number;
  currency?: string;
  areaServed?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'LocalBusiness',
    name: 'DTF Rápido by Kontes Express',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
  },
  areaServed: service.areaServed || 'Brasil',
  ...(service.price && {
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: service.currency || 'BRL',
    },
  }),
});

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
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
});
