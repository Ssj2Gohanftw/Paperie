import { Schema, model } from "mongoose";

const transactionSchema = Schema({
  transactionId: {
    type: String,
    required: [true, "Gimme Transaction id fas fas"],
  },

  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: "Order",
    required: false,
  },
});

export default model("Transaction", transactionSchema);
