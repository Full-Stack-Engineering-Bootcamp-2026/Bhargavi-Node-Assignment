import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import sendEmail from "./sendMail/sendMail";

const app = express();
const PORT = 3000;

//Middleware (helps parse JSON if needed later)
app.use(express.json());

//est route (to check server is running)
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

//route to send my mail
app.get("/send-mail", async (req: Request, res: Response) => {
  try {
    await sendEmail(); // calling your sendMail function
    res.status(200).send("Email sent successfully ");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email ");
  }
});
// start server 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// import dotenv from "dotenv";
// dotenv.config();
// import express, { Request, Response } from "express";

// import sendEmail from "./sendMail/sendMail";

// const app = express();

// app.get("/send-mail", async (req: Request, res: Response) => {
//   try {
//     await sendEmail();
//     res.send("Email sent successfully ");
//   } catch (err) {
//     res.status(500).send("Failed to send email");
//   }
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });