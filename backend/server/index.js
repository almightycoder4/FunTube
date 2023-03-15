import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/videos.js";
import authRoutes from "./routes/auth.js";
import cookieparser from "cookie-parser";
const app = express();
app.get("/", (req, res, next) => {
  res.send("Server has Started");
});

dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => {
      console.log("Connected DB");
    })
    .catch((err) => {
      throw err;
    });
};
app.use(cookieparser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    sucess: false,
    status,
    message,
  });
});
const port = process.argv[2] || 3035;
app.listen(port, () => {
  connect();
  console.log(`Server listening to http requests on http://localhost:${port}`);
});
