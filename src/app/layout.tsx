import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { initMobileOptimizations } from '@/lib/mobile-optimizations';
import { Analytics } from '@/components/Analytics';
import { Toaster } from 'react-hot-toast';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { PerformanceOptimizer } from '@/components/PerformanceOptimizer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SafeComponent } from '@/components/SafeComponent';
import { WebpackErrorBoundary } from '@/components/WebpackErrorBoundary';
import { VideoOptimizer } from '@/components/VideoOptimizer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: false,
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = generateSEOMetadata({
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
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Meta tags */}
        <meta name="theme-color" content="#ffd700" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="description" content="Impressão DTF Premium com brilho, cor e precisão impecável. Tecnologia de ponta para estampas personalizadas de alta qualidade em São Paulo." />
        
        {/* Open Graph */}
        <meta property="og:title" content="DTF Rápido by Kontes Express - Impressão DTF Premium" />
        <meta property="og:description" content="Impressão DTF Premium com brilho, cor e precisão impecável. Tecnologia de ponta para estampas personalizadas de alta qualidade." />
        <meta property="og:image" content="/images/logo-Kontes.png.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dtfrapido.com.br" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DTF Rápido by Kontes Express" />
        <meta name="twitter:description" content="Impressão DTF Premium com brilho, cor e precisão impecável." />
        <meta name="twitter:image" content="/images/logo-Kontes.png.webp" />
      </head>
      <body className={`${inter.className} antialiased bg-dark-900 text-white`}>
        <ErrorBoundary>
          <WebpackErrorBoundary>
            <SafeComponent>
              <Breadcrumbs />
              {children}
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#1a1a1a',
                    color: '#fff',
                    border: '1px solid #ffd700',
                  },
                }}
              />
              <Analytics />
              <PerformanceOptimizer />
              <VideoOptimizer />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    // Initialize mobile optimizations
                    if (typeof window !== 'undefined') {
                      import('@/lib/mobile-optimizations').then(({ initMobileOptimizations }) => {
                        initMobileOptimizations();
                      });
                    }
                  `,
                }}
              />
            </SafeComponent>
          </WebpackErrorBoundary>
        </ErrorBoundary>
      </body>
    </html>
  );
}

