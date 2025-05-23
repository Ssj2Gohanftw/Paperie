import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();

  const validUser = process.env.ADMIN_USER || "admin";
  const validPass = process.env.ADMIN_PASS || "password";

  if (username === validUser && password === validPass) {
    // Set a secure, HTTP-only cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8, // 8 hours
    });
    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
