import { Schema, model } from "mongoose";

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Must provide name"],
  },

  email: {
    type: String,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/g, "Please Provide Valid email"],
  },

  address: {
    type: String,
    required: [true, "Must provide address"],
  },

  phone: {
    type: Number,
    required: [true, "Must provide phone"],
  },

  customization: {
    type: String,
    default: "",
  },
});

export default model("Customer", CustomerSchema);
