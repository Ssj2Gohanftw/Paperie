// lib/migrateProducts.js
import connectToDatabase from "@/lib/mongo"; // Your MongoDB connection logic
import Product from "@/backend/models/Product";
import { invitationCards, envelopes } from "@/data/shop/products";

async function migrateProducts() {
  try {
    // Connect to MongoDB
    await connectToDatabase();
    console.log("Connected to MongoDB");

    // Clear existing products (optional, uncomment if needed)
    // await Product.deleteMany({});
    // console.log("Cleared existing products");

    // Migrate invitation cards
    for (const card of invitationCards) {
      const product = new Product({
        name: card.name,
        description: card.description,
        image: [card.image], // Wrap single image in an array
        price: card.price,
        category: "invitationCards",
        quantity: 100, // Default quantity
        slug: card.slug, // Use existing slug from data
      });
      await product.save();
      console.log(`Migrated card: ${card.name}`);
    }

    // Migrate envelopes
    for (const envelope of envelopes) {
      const product = new Product({
        name: envelope.name,
        description: envelope.description,
        image: [envelope.image],
        price: envelope.price,
        category: "envelopes",
        quantity: 50, // Default quantity
        slug: envelope.slug,
      });
      await product.save();
      console.log(`Migrated envelope: ${envelope.name}`);
    }

    console.log("Products migrated successfully!");
  } catch (error) {
    console.error("Migration failed:", error);
  }
}
export { migrateProducts };
