import { getIronSession } from "iron-session";
import { sessionOptions } from "@/lib/session";
import dbConnect from "@/lib/db.js"; // Adjust the import based on your file structure
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import User from "@/backend/models/User";

export async function POST(request) {
  try {
    await dbConnect(); 

    const body = await request.json();
    const { email, password } = body;

   
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }
    
    const user = await User.findOne({ email: email.toLowerCase() }).lean(); // .lean() for a plain JS object, faster if not modifying

    if (!user) {
      // Generic error message to prevent user enumeration
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 } // Unauthorized
      );
    }

    // --- 3. Compare Password ---
    // The password from the DB is user.passwordHash (as per your schema)
    const isPasswordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordMatch) {
      // Generic error message
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 } // Unauthorized
      );
    }

    // --- 4. Create Session using iron-session ---
    const session = await getIronSession(cookies(), sessionOptions);
    session.user = {
      id: user._id.toString(), // Mongoose uses _id
      email: user.email,
      name: user.name,
      role: user.role,
      phone: user.phone, // You can include other non-sensitive info needed by the client
      // DO NOT store sensitive information like passwordHash in the session
    };
    await session.save(); // This encrypts the session and sets the cookie

    // --- 5. Return Success Response ---
    // Send back non-sensitive user information
    const { passwordHash, ...userWithoutPassword } = user; // Exclude passwordHash

    return NextResponse.json(
      {
        message: "Login successful!",
        user: {
          id: userWithoutPassword._id.toString(),
          email: userWithoutPassword.email,
          name: userWithoutPassword.name,
          role: userWithoutPassword.role,
          phone: userWithoutPassword.phone,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Login Route Error:", err);
    let errorMessage = "An unexpected error occurred during login.";
    let statusCode = 500;

    if (err.name === "SyntaxError") {
      // from request.json()
      errorMessage = "Invalid request format.";
      statusCode = 400;
    } else if (err.message.includes("Database connection failed")) {
      errorMessage = err.message;
      statusCode = 503; // Service Unavailable
    }
    // Add other specific error handling if needed

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
