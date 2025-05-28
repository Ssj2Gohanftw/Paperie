// app/api/migrate/route.js
import { NextResponse } from "next/server";
import { migrateProducts } from "@/lib/migrateProducts";

export async function GET() {
  try {
    await migrateProducts();
    return NextResponse.json({ message: "Migration completed successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
