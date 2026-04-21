import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import mailRoutes from "./routes/mailRoutes";

const app = express();
const PORT = 3000;

//View engine setup (EJS)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

//Middleware
app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json());

//Routes
app.use("/", mailRoutes);

//Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});