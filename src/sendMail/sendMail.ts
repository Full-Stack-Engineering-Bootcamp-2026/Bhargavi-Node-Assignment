import fs from "fs";
import path from "path";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

//ead API key safely
const apiKey = process.env.SENDGRID_API_KEY;

if (!apiKey) {
  throw new Error("SENDGRID_API_KEY is missing in .env");
}

// Trim removes spaces/newlines
sgMail.setApiKey(apiKey.trim());

const sendEmail = async (): Promise<void> => {
  const filePath = path.join(__dirname, "../../text.txt");
  const fileContent = fs.readFileSync(filePath).toString("base64");

  const msg: MailDataRequired = {
    to: "emailtobhargavi.9@gmail.com",
    from: "bhargavithorat9@gmail.com",
    subject: "Weekly Update",
    text: "Hello from SendGrid",
    html: "<h1>Hello this is weekly mail</h1>",
    attachments: [
      {
        content: fileContent,
        filename: "text.txt",
        type: "text/plain",
        disposition: "attachment",
      },
    ],
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("SendGrid Error:", error);
    throw error;
  }
};

export default sendEmail;