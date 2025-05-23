// app/api/auth/me/route.js
import { getIronSession } from "iron-session";
import { sessionOptions } from "@/lib/session";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request) {
  // Read cookies and decrypt the session
  const session = await getIronSession(request.cookies, sessionOptions);
  // Return user or null
  return NextResponse.json({ user: session.user || null });
}

export async function DELETE(request) {
  // Read cookies and decrypt the session
  const session = await getIronSession(request.cookies, sessionOptions);
  // Destroy the session (clears the cookie)
  await session.destroy();
  return NextResponse.json({ ok: true });
}
