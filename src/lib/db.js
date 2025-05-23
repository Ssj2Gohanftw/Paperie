import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
let cached = global.mongooseConnection;

if (!cached) {
  cached = global.mongooseConnection = { conn: null, promise: null };
}
async function dbConnect() {
  if (cached.conn) {
    // console.log('Using cached Mongoose connection.');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Disable Mongoose's buffering to catch connection errors immediately
      // useNewUrlParser: true, // Deprecated in Mongoose 6+
      // useUnifiedTopology: true, // Deprecated in Mongoose 6+
    };

    // console.log('Attempting new Mongoose connection...');
    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        // console.log('New Mongoose connection established.');
        return mongooseInstance;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null; // Reset promise on error
    console.error("Mongoose connection error:", e);
    throw new Error("Database connection failed. Please try again later."); // Rethrow a user-friendly error or handle appropriately
  }

  return cached.conn;
}

export default dbConnect;
