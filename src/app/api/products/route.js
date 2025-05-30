import { NextResponse } from "next/server";
import Product from "@/backend/models/Product";
import connectToDatabase from "@/lib/mongo";

export async function GET() {
  try {
    await connectToDatabase();
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (error) {
    console.log("Error fetching products", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
