import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import { connectDB } from "./config/db";

// import mailRoutes from "./routes/file.routes";
import fileRoutes from "./routes/file.routes";   
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const PORT = 3000;

connectDB();

// View engine
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "../src/views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// Routes
// app.use("/", mailRoutes);
app.use("/", fileRoutes);   
// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});