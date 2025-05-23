// Configure environment
require("dotenv").config();

// imports
import express, { json } from "express";
import connectDB from "./db/connect";
import cors from "cors";

// Router imports
import helloWorldRouter from "./routes/hello.route";
import customerRouter from "./routes/customer.route";
import transactionRouter from "./routes/transaction.route";

// Variable conf
const app = express();
const port = process.env.PORT || 6942;

// Helper functions
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log(`Listening of port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

// Middlewares
app.use(json());
app.use(cors());

// Routes
app.use("/", helloWorldRouter);
app.use("/api/customer", customerRouter);
app.use("/api/transaction", transactionRouter);

start();
