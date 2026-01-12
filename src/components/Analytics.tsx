'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// IDs das tags (podem ser configurados via variáveis de ambiente)
const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || 'G-JC5R2MJY1Y';
const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || 'AW-17637950542';
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '883049861338391';

export function Analytics() {
  useEffect(() => {
    // Inicializar dataLayer se não existir
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
    }

    // Configurar Google Tag após carregamento
    const gtag = (window as any).gtag;
    if (gtag) {
      // Configurar Google Tag (G-JC5R2MJY1Y)
      gtag('config', GOOGLE_TAG_ID, {
        page_title: 'DTF Rápido by Kontes Express',
        page_location: window.location.href,
      });

      // Configurar Google Analytics 4 se disponível
      if (GA_MEASUREMENT_ID) {
        gtag('config', GA_MEASUREMENT_ID, {
          page_title: 'DTF Rápido by Kontes Express',
          page_location: window.location.href,
        });
      }

      // Configurar Google Ads se disponível
      if (GOOGLE_ADS_CONVERSION_ID) {
        gtag('config', GOOGLE_ADS_CONVERSION_ID, {
          page_title: 'DTF Rápido by Kontes Express',
          page_location: window.location.href,
        });
      }
    }

    // Google Tag Manager
    const gtm = (window as any).dataLayer;
    if (gtm) {
      gtm.push({
        event: 'page_view',
        page_title: 'DTF Rápido by Kontes Express',
        page_location: window.location.href,
      });
    }
  }, []);

  return (
    <>
      {/* Google Tag (gtag.js) - Carrega a tag global do Google */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
      />
      <Script
        id="google-tag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Configurar Google Tag (G-JC5R2MJY1Y)
            gtag('config', '${GOOGLE_TAG_ID}', {
              page_path: window.location.pathname,
            });
            
            ${GA_MEASUREMENT_ID ? `
            // Configurar Google Analytics 4
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
            ` : ''}
            
            ${GOOGLE_ADS_CONVERSION_ID ? `
            // Configurar Google Ads Conversion Tracking
            gtag('config', '${GOOGLE_ADS_CONVERSION_ID}', {
              page_path: window.location.pathname,
            });
            ` : ''}
          `,
        }}
      />

      {/* Google Tag Manager */}
      {GTM_ID && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
          {/* GTM noscript fallback */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Meta Pixel */}
      {META_PIXEL_ID && (
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}
    </>
  );
}

