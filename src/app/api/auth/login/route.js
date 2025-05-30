// app/api/login/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/backend/models/User"; // Your Mongoose User model
import connectToDatabase from "@/lib/mongo";

const JWT_SECRET = process.env.JWT_SECRET; // Define in .env.local

export async function POST(request) {
  try {
    await connectToDatabase();
    const { email, password } = await request.json();

    console.log("Login attempt with:", { email });

    if (!email || !password) {
      console.log("Missing email or password");
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Find user
    const user = await User.findOne({ email: email.toLowerCase() });
    console.log("User found:", user ? user.email : "No user found");

    if (!user) {
      console.log("No user found for email:", email);
      return NextResponse.json(
        { error: "No user found with this email" },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log("Password comparison result:", isValidPassword);
    console.log("Provided password:", password);
    console.log("Stored hashed password:", user.password);

    if (!isValidPassword) {
      console.log("Invalid password for user:", email);
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id.toString(), email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("Login successful for user:", user.email);

    // Set token in an HTTP-only cookie
    const response = NextResponse.json({ message: "Login successful" });
    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 3600, // 1 hour
    });

    return response;
  } catch (error) {
    console.error("Login error:", error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
