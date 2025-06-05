import mongoose, { Schema, models } from "mongoose";
import Customer from "./Customer";
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
UserSchema.post("save", async function (doc) {
  if (doc.role === "customer") {
    const existingCustomer = await Customer.findOne({ user: doc._id });
    if (!existingCustomer) {
      const newCustomer = new Customer({
        user: doc._id, // Link to the User document
        address: "", // Replace with real data if available
      });
      await newCustomer.save();
      console.log(`Created customer for user: ${doc.email}`);
    }
  }
});
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
