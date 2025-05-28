import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "your-jwt-secret-here";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return NextResponse.json({ isLoggedIn: false });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return NextResponse.json({
      isLoggedIn: true,
      user: { name: decoded.name, email: decoded.email },
    });
  } catch (error) {
    return NextResponse.json({ isLoggedIn: false });
  }
}
