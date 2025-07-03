import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    if (!ENV.MONGO_URI) {
      throw new Error(
        "MONGO_URI is not defined in enviroment variable"
      );
    }
    await mongoose.connect(ENV.MONGO_URI);
    console.log("Connected to DB SUCCESSFULLY ✅");
  } catch (error) {
    console.log("Error connecting to MONGODB: ", error.message);
    process.exit(1);
  }
};
