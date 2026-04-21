import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { sendEmail } from "../services/mailService";

export const sendMailController = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).render("index", {
        errors: errors.array(),
      });
    }

    const { email, subject, message } = req.body;

    await sendEmail(email, subject, message);

    res.render("success");
  } catch (error) {
    console.error(error);
    res.render("error");
  }
};