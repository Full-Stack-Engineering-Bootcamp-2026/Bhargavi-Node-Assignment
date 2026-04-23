import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { sendEmail } from "../services/mailService";
import { HttpError } from "../utils/HttpError";

export const sendMailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new HttpError("Validation failed", 422));
  }

  const { email, subject, message } = req.body;

  try {
    await sendEmail(email, subject, message);
    res.render("success");
  } catch (err) {
    return next(new HttpError("Email sending failed", 500));
  }
};