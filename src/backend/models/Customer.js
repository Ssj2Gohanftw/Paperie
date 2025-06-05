import { Schema, model } from "mongoose";

const CustomerSchema = new Schema({
  address: {
    type: String,
    required: [true, "Must provide address"],
    default: "",
  },

  // customization: {
  //   type: String,
  //   default: "",
  // },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
},  { timestamps: true }
);

export default model("Customer", CustomerSchema);
