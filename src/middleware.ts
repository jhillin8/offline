import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Auth bypassed - customers need access
export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes we want to exclude
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
