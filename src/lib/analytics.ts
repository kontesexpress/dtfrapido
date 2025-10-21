// Google Analytics 4
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID';

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

// Meta Pixel
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || 'META_PIXEL_ID';

export const trackMetaEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, parameters);
  }
};

// Custom events
export const trackContactForm = () => {
  event({
    action: 'contact_form_submit',
    category: 'engagement',
    label: 'contact_form',
  });
  trackMetaEvent('Lead', {
    content_name: 'Contact Form',
    content_category: 'Form Submission',
  });
};

export const trackQuoteRequest = () => {
  event({
    action: 'quote_request',
    category: 'conversion',
    label: 'quote_request',
  });
  trackMetaEvent('Lead', {
    content_name: 'Quote Request',
    content_category: 'Lead Generation',
  });
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

