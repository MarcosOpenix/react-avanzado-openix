import type { NextRequest } from 'next/server'
import { User } from './types/types';

export function middleware(request: NextRequest) {
  const user = request.cookies.get('currentUser')?.value;
  let currentUser: User | undefined;

  if (user) {
    currentUser = JSON.parse(user);
  }

  if (currentUser) {
    if (currentUser.role === "admin" && request.nextUrl.pathname === '/') {
      return Response.redirect(new URL('/admin', request.url))
    } else if (request.nextUrl.pathname === '/') {
      return Response.redirect(new URL('/home', request.url))
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}