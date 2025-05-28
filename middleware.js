// middleware.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function middleware(request) {
  const token = request.cookies.get("auth_token")?.value;

  if (!token) {
    console.log("No auth token found, redirecting to login");
    return NextResponse.redirect(new URL("/account/login", request.url));
  }

  try {
    jwt.verify(token, JWT_SECRET);
    console.log("Token verified, proceeding");
    return NextResponse.next();
  } catch (error) {
    console.error("Invalid token:", error.message);
    return NextResponse.redirect(new URL("/account/login", request.url));
  }
}

export const config = {
  matcher: ["/shop/:path*", "/shop"],
};
