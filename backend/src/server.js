import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { arcjetMiddleware } from "./middleware/arcjet.middleware.js";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import commentRoute from "./routes/comment.route.js";
import notificationRoute from "./routes/notification.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());
app.use(arcjetMiddleware());

app.get("/", (req, res) => res.send("Hello from server"));

app.use("api/users", userRoute);
app.use("api/posts", postRoute);
app.use("api/comments", commentRoute);
app.use("api/notifications", notificationRoute);

const startServer = async () => {
  try {
    await connectDB();

    app.get("/", (req, res) => res.send("Hello from server"));

    app.listen(ENV.PORT, () =>
      console.log("Server is up running on PORT:", ENV.PORT)
    );
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
