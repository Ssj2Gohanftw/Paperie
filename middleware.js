import { NextResponse } from "next/server";

export function middleware(request) {
  const isAdmin = request.cookies.get("admin_auth")?.value === "true";

  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.startsWith("/admin/login") &&
    !isAdmin
  ) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
