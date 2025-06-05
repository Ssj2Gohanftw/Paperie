import { Schema, model } from "mongoose";

const transactionSchema = Schema(
  {
    transactionId: {
      type: String,
      required: [true, "Provide Transaction id "],
    },

    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },

    order: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: false,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    error: {
      type: String,
      default: "",
    },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "paypal", "bank_transfer"],
      default: null,
    },
    amount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default model("Transaction", transactionSchema);
