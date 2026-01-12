export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '883049861338391';

export const pageview = () => {
    if (typeof window !== 'undefined') {
        // Client-side pixel
        (window as any).fbq('track', 'PageView');

        // Server-side CAPI
        fetch('/api/capi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                eventName: 'PageView',
                eventId: `pv-${Date.now()}-${Math.random()}`,
                eventSourceUrl: window.location.href,
            }),
        }).catch((err) => console.error('CAPI PageView Error:', err));
    }
};

export const event = (name: string, options: any = {}, eventId?: string) => {
    if (typeof window !== 'undefined') {
        const finalEventId = eventId || `evt-${name}-${Date.now()}-${Math.random()}`;

        // Client-side pixel
        (window as any).fbq('track', name, options, { eventID: finalEventId });

        // Server-side CAPI
        fetch('/api/capi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                eventName: name,
                eventId: finalEventId,
                eventSourceUrl: window.location.href,
                userData: options.user_data,
                customData: options,
            }),
        }).catch((err) => console.error(`CAPI ${name} Error:`, err));
    }
};
