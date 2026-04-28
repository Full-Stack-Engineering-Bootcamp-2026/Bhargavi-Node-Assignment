import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./config/db";

import fileRoutes from "./routes/file.routes";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./middleware/errorHandler";
import razorpayRouter from './routes/payment.routes'

import postRoute from "./routes/Post.routes";
import { corsMiddleware } from "./middleware/cors.middleware";

const app = express();
//post 3000 
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors middleware
app.use(corsMiddleware);
//route - cors
app.use("/v1",postRoute)

//payment
app.use('/payment',razorpayRouter)

// Static files
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/", fileRoutes);
app.use("/", userRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API is running");
});

// Global error handler
app.use(errorHandler);

// Proper startup (DB first, then server)
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();