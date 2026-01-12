import { NextResponse } from 'next/server';
import { FB_ACCESS_TOKEN, FB_PIXEL_ID } from '@/lib/constants';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { eventName, eventId, eventSourceUrl, userData, customData } = body;

        const currentTimestamp = Math.floor(Date.now() / 1000);

        // Obter IP e User Agent do request headers
        const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1';
        const clientUserAgent = request.headers.get('user-agent') || '';

        const payload = {
            data: [
                {
                    event_name: eventName,
                    event_time: currentTimestamp,
                    event_id: eventId,
                    event_source_url: eventSourceUrl,
                    action_source: 'website',
                    user_data: {
                        client_ip_address: clientIp,
                        client_user_agent: clientUserAgent,
                        ...userData,
                    },
                    custom_data: customData,
                },
            ],
            access_token: FB_ACCESS_TOKEN,
        };

        const response = await fetch(
            `https://graph.facebook.com/v18.0/${FB_PIXEL_ID}/events`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error('Facebook CAPI Error:', data);
            return NextResponse.json({ error: data }, { status: response.status });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
