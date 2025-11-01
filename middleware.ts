import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;

  // Allow login page without token
  if (req.nextUrl.pathname.startsWith("/admin/login")) {
    if (token) {
      // Already logged in → redirect to /admin
      return NextResponse.redirect(new URL("/admin", req.url));
    }
    return NextResponse.next();
  }

  // Protect /admin routes
  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
