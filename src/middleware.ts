import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath =
    path === '/login' || path === '/signup' || path === '/verifyemail';

  const token = request.cookies.get('token')?.value || '';

  if (isPublicPath && token) {
    // User is already authenticated, redirect to a different route (e.g., '/dashboard')
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    // User is not authenticated, redirect to the login page
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/profile',
    '/verifyemail',
    '/about',
    '/contact',
  ],
};
