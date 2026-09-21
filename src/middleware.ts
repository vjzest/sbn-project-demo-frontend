import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const host = request.headers.get('host') || '';
    const response = NextResponse.next();

    // 1. Identify non-production hostnames (Vercel preview, staging, etc.)
    const isProductionHost = 
        host === 'www.sbnhealthcaresolution.com' || 
        host === 'sbnhealthcaresolution.com' ||
        host.includes('localhost') || 
        host.includes('127.0.0.1');

    // 2. Protect Staging / Preview from indexing
    if (!isProductionHost || host.includes('vercel.app')) {
        response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet');

        // Optional basic auth protection if enabled in environment
        if (process.env.STAGING_AUTH_ENABLED === 'true') {
            const basicAuth = request.headers.get('authorization');
            if (!basicAuth) {
                return new NextResponse('Authentication required for staging environment.', {
                    status: 401,
                    headers: {
                        'WWW-Authenticate': 'Basic realm="Secure Staging Area"',
                        'X-Robots-Tag': 'noindex, nofollow',
                    },
                });
            }
            const authValue = basicAuth.split(' ')[1];
            const [user, pwd] = atob(authValue).split(':');
            const validUser = process.env.STAGING_USER || 'sbnadmin';
            const validPass = process.env.STAGING_PASS || 'SbnPreview2026!';

            if (user !== validUser || pwd !== validPass) {
                return new NextResponse('Invalid credentials.', {
                    status: 401,
                    headers: {
                        'WWW-Authenticate': 'Basic realm="Secure Staging Area"',
                        'X-Robots-Tag': 'noindex, nofollow',
                    },
                });
            }
        }
    }

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, Logo.webp (public static assets)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|Logo.webp).*)',
    ],
};
