import mongoose from "mongoose";
import validator, { trim } from "validator";

const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: function (v) {
          return validator.isEmail(v);
        },
        message: (props) =>
          `${props.value} Please enter a valid email address`,
      },
    },
    firstName: {
      type: String,
      require: true,
      unique: true,
      minLength: [3, "First name minimum have 3 characters"],
      maxLength: [30, "First name maximum have 30 characters"],
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9_]+$/.test(v);
        },
        message: "First name can only be letters, spaces and hyphens",
      },
    },
    lastName: {
      type: String,
      require: true,
      unique: true,
      minLength: [3, "Last name minimum have 3 characters"],
      maxLength: [30, "Last name maximum have 30 characters"],
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9_]+$/.test(v);
        },
        message: "Last name can only be letters, spaces and hyphens",
      },
    },
    username: {
      type: String,
      required: true,
      unique: true,
      unique: true,
      minLength: [3, "User name minimum have 3 characters"],
      maxLength: [30, "User name minimum have 30 characters"],
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9_]+$/.test(v);
        },
        message:
          "Username can only contain letters, numbers, and underscores",
      },
    },
    profilePicture: {
      type: String,
      default: "",
      trim: true,
      validate: {
        validator: function (v) {
          return (
            validator.isURL(v) &&
            /\.(jpg|jpeg|png|gif|webp)$/i.test(v)
          );
        },
        message: "Picture must be valid URL",
      },
    },
    bannerImage: {
      type: String,
      default: "",
      trim: true,
      validate: {
        validator: function (v) {
          return (
            validator.isURL(v) &&
            /\.(jpg|jpeg|png|gif|webp)$/i.test(v)
          );
        },
        message: "Picture must be valid URL",
      },
    },
    bio: {
      type: String,
      default: "",
      maxLength: 160,
    },
    location: {
      type: String,
      default: "",
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
