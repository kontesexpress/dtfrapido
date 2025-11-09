// Google Analytics 4
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID';

// Google Ads Conversion Tracking
export const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || 'AW-17637950542';
export const GOOGLE_ADS_CONVERSION_LABEL_FORM = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_FORM || '';
export const GOOGLE_ADS_CONVERSION_LABEL_WHATSAPP = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_WHATSAPP || '';

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Rastreia uma conversão do Google Ads
 * @param conversionLabel - Label da conversão (ex: 'AbC-dEfG')
 * @param value - Valor da conversão (opcional)
 * @param currency - Moeda (padrão: 'BRL')
 * @param transactionId - ID único da transação (opcional)
 */
export const trackGoogleAdsConversion = ({
  conversionLabel,
  value,
  currency = 'BRL',
  transactionId,
}: {
  conversionLabel: string;
  value?: number;
  currency?: string;
  transactionId?: string;
}) => {
  if (typeof window === 'undefined' || !(window as any).gtag) {
    console.warn('Google Tag (gtag) não está disponível');
    return;
  }

  if (!GOOGLE_ADS_CONVERSION_ID || !conversionLabel) {
    console.warn('Google Ads Conversion ID ou Label não configurados');
    return;
  }

  const conversionParams: Record<string, any> = {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${conversionLabel}`,
  };

  if (value !== undefined) {
    conversionParams.value = value;
    conversionParams.currency = currency;
  }

  if (transactionId) {
    conversionParams.transaction_id = transactionId;
  }

  (window as any).gtag('event', 'conversion', conversionParams);

  console.log('✅ Google Ads Conversion tracked:', conversionParams);
};

// Meta Pixel
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || 'META_PIXEL_ID';

export const trackMetaEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, parameters);
  }
};

// Custom events
export const trackContactForm = (value?: number, transactionId?: string) => {
  // Google Analytics Event
  event({
    action: 'contact_form_submit',
    category: 'engagement',
    label: 'contact_form',
    value: value,
  });

  // Meta Pixel Event
  trackMetaEvent('Lead', {
    content_name: 'Contact Form',
    content_category: 'Form Submission',
  });

  // Google Ads Conversion (se label configurado)
  if (GOOGLE_ADS_CONVERSION_LABEL_FORM) {
    trackGoogleAdsConversion({
      conversionLabel: GOOGLE_ADS_CONVERSION_LABEL_FORM,
      value: value,
      currency: 'BRL',
      transactionId: transactionId,
    });
  }
};

export const trackQuoteRequest = (value?: number, transactionId?: string) => {
  // Google Analytics Event
  event({
    action: 'quote_request',
    category: 'conversion',
    label: 'quote_request',
    value: value,
  });

  // Meta Pixel Event
  trackMetaEvent('Lead', {
    content_name: 'Quote Request',
    content_category: 'Lead Generation',
  });

  // Google Ads Conversion (usa o mesmo label do formulário ou pode ter um específico)
  if (GOOGLE_ADS_CONVERSION_LABEL_FORM) {
    trackGoogleAdsConversion({
      conversionLabel: GOOGLE_ADS_CONVERSION_LABEL_FORM,
      value: value,
      currency: 'BRL',
      transactionId: transactionId,
    });
  }
};

/**
 * Rastreia clique no botão WhatsApp como conversão
 */
export const trackWhatsAppClick = () => {
  // Google Analytics Event
  event({
    action: 'whatsapp_click',
    category: 'engagement',
    label: 'whatsapp_button',
  });

  // Meta Pixel Event
  trackMetaEvent('Lead', {
    content_name: 'WhatsApp Click',
    content_category: 'Contact',
  });

  // Google Ads Conversion (se label configurado)
  if (GOOGLE_ADS_CONVERSION_LABEL_WHATSAPP) {
    trackGoogleAdsConversion({
      conversionLabel: GOOGLE_ADS_CONVERSION_LABEL_WHATSAPP,
      currency: 'BRL',
    });
  } else if (GOOGLE_ADS_CONVERSION_LABEL_FORM) {
    // Fallback: usa o label do formulário se não houver um específico para WhatsApp
    trackGoogleAdsConversion({
      conversionLabel: GOOGLE_ADS_CONVERSION_LABEL_FORM,
      currency: 'BRL',
    });
  }
};

export const trackPortfolioView = (itemName: string) => {
  event({
    action: 'portfolio_view',
    category: 'engagement',
    label: itemName,
  });
};

export const trackPricePlanView = (planName: string) => {
  event({
    action: 'price_plan_view',
    category: 'engagement',
    label: planName,
  });
};

export const trackAIChat = () => {
  event({
    action: 'ai_chat_open',
    category: 'engagement',
    label: 'ai_chat',
  });
};

export const trackScrollDepth = (depth: number) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${depth}%`,
    value: depth,
  });
};

export const trackTimeOnPage = (time: number) => {
  event({
    action: 'time_on_page',
    category: 'engagement',
    label: `${Math.round(time / 1000)}s`,
    value: Math.round(time / 1000),
  });
};

