// middleware.js
import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions } from "@/lib/session";
export const runtime = "edge";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only run on /admin (but allow /admin/login through)
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    // Read & decrypt your iron-session cookie
    const session = await getIronSession(request.cookies, sessionOptions);
    const user = session.user;

    // If no session or not an admin, send to login
    if (!user || user.role !== "admin") {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      // optional: preserve where they were going
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
