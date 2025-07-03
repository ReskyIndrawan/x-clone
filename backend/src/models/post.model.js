import mongoose from "mongoose";
import validator from "validator";

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      maxLength: 280,
      require: true,
    },
    image: {
      type: String,
      default: "",
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
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
