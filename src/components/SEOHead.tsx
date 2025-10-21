'use client';

import Head from 'next/head';
import { SEOConfig } from '@/lib/seo';
import { baseSchema, websiteSchema, breadcrumbSchema } from '@/lib/schema';

interface SEOHeadProps {
  config: SEOConfig;
  breadcrumbs?: Array<{name: string, url: string}>;
  additionalSchemas?: any[];
}

export function SEOHead({ config, breadcrumbs, additionalSchemas = [] }: SEOHeadProps) {
  const schemas = [
    baseSchema,
    websiteSchema,
    ...(breadcrumbs ? [breadcrumbSchema(breadcrumbs)] : []),
    ...additionalSchemas,
  ];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords.join(', ')} />
      <meta name="author" content="Kontes Express" />
      <meta name="robots" content={config.noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="googlebot" content={config.noindex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={config.canonical} />

      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="pt-BR" />
      <meta name="language" content="Portuguese" />
      <meta name="geo.region" content="BR-SP" />
      <meta name="geo.placename" content="São Paulo" />
      <meta name="geo.position" content="-23.5505;-46.6333" />
      <meta name="ICBM" content="-23.5505, -46.6333" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content={config.canonical} />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:site_name" content="DTF Rápido by Kontes Express" />
      <meta property="og:image" content={config.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={config.title} />
      <meta property="og:image:type" content="image/jpeg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dtfrapido" />
      <meta name="twitter:creator" content="@dtfrapido" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image" content={config.ogImage} />
      <meta name="twitter:image:alt" content={config.title} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#ffd700" />
      <meta name="msapplication-TileColor" content="#ffd700" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="DTF Rápido" />

      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="São Paulo, SP" />
      <meta name="business:contact_data:locality" content="São Paulo" />
      <meta name="business:contact_data:region" content="SP" />
      <meta name="business:contact_data:postal_code" content="01000-000" />
      <meta name="business:contact_data:country_name" content="Brasil" />

      {/* Verification Tags */}
      {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
      )}
      {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
        <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
      )}
      {process.env.NEXT_PUBLIC_YANDEX_VERIFICATION && (
        <meta name="yandex-verification" content={process.env.NEXT_PUBLIC_YANDEX_VERIFICATION} />
      )}

      {/* Schema.org JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      
      {/* Mobile Optimization */}
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Cache Control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      <meta httpEquiv="Expires" content="31536000" />
    </Head>
  );
}
