import { body } from "express-validator";

export const mailValidation = [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email"),

  body("subject")
    .notEmpty()
    .withMessage("Subject is required"),

  body("message")
    .isLength({ min: 10 })
    .withMessage("Message must be at least 10 characters"),
];