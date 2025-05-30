import { Schema, model } from "mongoose";
import { slugify } from "@/data/shop/products";
const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: [String],
    category: String,
    quantity: {
      type: Number,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = slugify(this.name);
  }
  next();
});

export default model("Product", ProductSchema);
