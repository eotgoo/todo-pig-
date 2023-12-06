import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import connectDB from "./config/db";
import dotenv from "dotenv";
import * as cron from "node-cron";

dotenv.config();
import error from "./middlewares/error";
import userRoutes from "./routes/user";
import todoRoutes from "./routes/todo";

const app = express();

// Importing variables from .env
const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies

// Routes
app.use("/users", userRoutes);
app.use("/todo", todoRoutes);

// 8000 response
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Todo Backend is live");
});

app.use(error);
connectDB(MONGO_URI);

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
