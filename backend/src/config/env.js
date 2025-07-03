import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 5001,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_URI:
    process.env.MONGO_URI ||
    (() => {
      throw new Error("MONGO_URI enviroment variable is required");
    }),
  CLERK_PUBLISHABLE_KEY:
    process.env.CLERK_PUBLISHABLE_KEY ||
    (() => {
      throw new Error(
        "CLERK_PUBLISHABLE_KEY enviroment variable is required"
      );
    }),
  CLERK_SECRET_KEY:
    process.env.CLERK_SECRET_KEY ||
    (() => {
      throw new Error(
        "CLERK_SECRET_KEY enviroment variable is required"
      );
    }),
  CLOUDINARY_CLOUD_NAME:
    process.env.CLOUDINARY_CLOUD_NAME ||
    (() => {
      throw new Error(
        "CLOUDINARY_CLOUD_NAME enviroment variable is required"
      );
    }),
  CLOUDINARY_API_KEY:
    process.env.CLOUDINARY_API_KEY ||
    (() => {
      throw new Error(
        "CLOUDINARY_API_KEY enviroment variable is required"
      );
    }),
  CLOUDINARY_API_SECRET:
    process.env.CLOUDINARY_API_SECRET ||
    (() => {
      throw new Error(
        "CLOUDINARY_API_KEY enviroment variable is required"
      );
    }),
  ARCJET_KEY:
    process.env.ARCJET_KEY ||
    (() => {
      throw new Error("ARCJET_KEY enviroment variable is required");
    }),
};
