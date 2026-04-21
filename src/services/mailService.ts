import fs from "fs";
import path from "path";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

// API Key
const apiKey = process.env.SENDGRID_API_KEY;

if (!apiKey) {
  throw new Error("SENDGRID_API_KEY is missing in .env");
}

sgMail.setApiKey(apiKey.trim());

export const sendEmail = async (
  email:string,
  subject:string,
  message:string
):Promise<void> => {
  const filePath = path.join(__dirname, "../../text.txt");
  const fileContent = fs.readFileSync(filePath).toString("base64");

  const msg: MailDataRequired = {
    to: email,
    from:"bhargavithorat9@gmail.com",
    subject:subject,
    text:message,
    html:`<h1>${message}</h1>`,

    attachments: [
      {
        content: fileContent,
        filename: "text.txt",
        type: "text/plain",
        disposition: "attachment",
      },
    ],
  };

  await sgMail.send(msg);
};