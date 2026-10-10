import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function middleware(req: NextRequest) {
    const res = NextResponse.next();
    res.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.headers.set('Access-Control-Allow-Methods', 'GET,POST,PATCH,OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return res;
}
export const config = { matcher: '/api/:path*' };
