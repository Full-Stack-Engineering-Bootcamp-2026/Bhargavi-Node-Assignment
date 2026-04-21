import express from "express";
import { sendMailController } from "../controllers/mailController";
import { mailValidation } from "../middleware/validation";

const router = express.Router();

// Show form
router.get("/", (req, res) => {
  res.render("index", { errors: null });
});

// Handle form submit
router.post("/send-mail", mailValidation, sendMailController);

export default router;