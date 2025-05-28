import { NextResponse } from "next/server";
import Product from "@/backend/models/Product";
import connectToDatabase from "@/lib/mongo";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  await connectToDatabase();
  let query = {};
  if (category) {
    query.category = category;
  }
  try {
    const products = await Product.find(query);
    return NextResponse.json(products);
  } catch (error) {
    console.log("Error fetching products", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
