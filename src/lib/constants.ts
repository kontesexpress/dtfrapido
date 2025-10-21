export const SITE_CONFIG = {
  name: 'DTF Rápido by Kontes Express',
  description: 'Impressão DTF Premium com brilho, cor e precisão impecável',
  url: 'https://dtfrapido.com',
  ogImage: 'https://dtfrapido.com/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/dtfrapido',
    github: 'https://github.com/dtfrapido',
    instagram: 'https://instagram.com/dtfrapido',
    facebook: 'https://facebook.com/dtfrapido',
    linkedin: 'https://linkedin.com/company/dtfrapido',
  },
};

export const NAVIGATION = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre DTF', href: '#sobre' },
  { name: 'Vantagens', href: '#vantagens' },
  { name: 'Preços', href: '#precos' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Contato', href: '#contato' },
];

export const PRICING_PLANS = [
  {
    name: 'Básico',
    price: 15,
    unit: 'por peça',
    features: [
      'Até 10 peças',
      'Cores básicas',
      'Entrega em 3 dias',
      'Suporte por email',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: 12,
    unit: 'por peça',
    features: [
      'Até 50 peças',
      'Cores vibrantes',
      'Entrega em 24h',
      'Suporte prioritário',
      'Revisão gratuita',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 8,
    unit: 'por peça',
    features: [
      'Acima de 100 peças',
      'Cores premium',
      'Entrega expressa',
      'Suporte dedicado',
      'Revisões ilimitadas',
      'Desconto progressivo',
    ],
    popular: false,
  },
];

export const CONTACT_INFO = {
  phone: '+55 (11) 91900-9112',
  email: 'kontesexpress@gmail.com',
  address: 'R. Bresser, 601 - Brás, São Paulo - SP, 03017-000',
  hours: 'Segunda à sexta: 8h às 17h | Sábado: 8h às 12h',
};

export const SOCIAL_LINKS = [
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
];

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  },
};

export const SEO_CONFIG = {
  title: 'DTF Rápido by Kontes Express - Impressão DTF Premium',
  description: 'Impressão DTF Premium com brilho, cor e precisão impecável. Tecnologia de ponta para estampas personalizadas de alta qualidade.',
  keywords: [
    'impressão DTF',
    'DTF premium',
    'DTF São Paulo',
    'personalização',
    'estamparia digital',
    'Kontes Express',
    'DTF Rápido',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://dtfrapido.com',
    siteName: 'DTF Rápido by Kontes Express',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dtfrapido',
    creator: '@dtfrapido',
  },
};

