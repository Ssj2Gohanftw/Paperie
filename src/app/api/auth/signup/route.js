import dbConnect from "@/lib/db";
import User from "@/backend/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  await dbConnect();

  const { name, email, password, confirmPassword, phone } =
    await request.json();

  if (!name || !email || !password || !confirmPassword || !phone) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }
  if (password !== confirmPassword) {
    return NextResponse.json(
      { error: "Passwords do not match" },
      { status: 400 }
    );
  }

  // Check if user already exists
  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json(
      { error: "Email already exists" },
      { status: 400 }
    );
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    name,
    email: email.toLowerCase(),
    passwordHash: hashedPassword,
    phone,
  });

  // Set a session cookie (for demo, just use email; for production, use JWT or secure session)
  // You can use Next.js cookies API or a JWT here
  // Example (not secure for production):
  // import { cookies } from "next/headers";
  // cookies().set("user_auth", JSON.stringify({ email, name }), { httpOnly: true, path: "/" });

  return NextResponse.json(
    { ok: true, user: { email: user.email, name: user.name } },
    { status: 201 }
  );
}
