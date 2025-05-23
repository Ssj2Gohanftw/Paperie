import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: [String],
  category: String,
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
});
export default model("Product", ProductSchema);
