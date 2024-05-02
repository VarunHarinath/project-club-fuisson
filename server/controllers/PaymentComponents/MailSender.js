import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";

dotenv.config();
const MailSender = async (event, userId, name, email, orderId) => {
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        body,
        html {
          margin: 0;
          padding: 0;
          font-family: "Helvetica Neue", Arial, sans-serif;
          background-color: #f4f4f9;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: auto;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #017bff;
          color: #ffffff;
          padding: 20px 30px;
          text-align: center;
          background-image: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);
          font-size: 24px;
        }
        .content {
          padding: 20px 30px;
          line-height: 1.6;
          background-color: #ffffff;
        }
        .content a {
          color: #017bff;
          text-decoration: none;
          font-weight: bold;
        }
        .footer {
          font-size: 16px;
          text-align: center;
          padding: 20px 30px;
          background-color: #f0f0f5;
          font-weight: bold;
          color: #333;
        }
        .footer a {
          color: #017bff;
          text-decoration: none;
        }
        .details {
          margin-top: 20px;
        }
        .details strong {
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Udbhava Club Event</h1>
        </div>
        <div class="content">
          <p>Dear ${name},</p>
          <p>
            Your ticket for the event <strong>${event}</strong> has been
            successfully booked!
          </p>
          <p>
            We are thrilled to welcome you to an experience filled with innovation
            and excitement.
          </p>
          <p>
            Please find attached your boarding pass which must be presented at the
            event for entry.
          </p>
       
          <div class="details">
            <a href="https://mru-clubs.vercel.app/event/successform/${userId}"
              >Click here to view your ticket details</a
            >
          </div>
        </div>
        <div class="footer">
          <p>Connect with us:</p>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
          <p>Udbhava Club Team</p>
          <p>
            &copy; ${new Date().getFullYear()} Udbhava Club. All rights reserved.
          </p>
        </div>
      </div>
    </body>
  </html>
  


  `;
  const transpoter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const mailOptions = {
    from: process.env.USER,
    to: `${email}`,
    subject: "Welcome to Udbhava Club Event - Your Ticket Details Inside",
    html: htmlContent,
    attachments: [
      {
        filename: `${orderId}.pdf`,
        path: path.join(__dirname, `participants_pdf/${orderId}.pdf`),
        contentType: "application/pdf",
      },
    ],
  };

  try {
    const response = await transpoter.sendMail(mailOptions);
    if (response.messageId.length > 2) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export default MailSender;
// MailSender(
//   "Tech Con 2024",
//   "Test Venue",
//   "",
//   "Varun",
//   "varunharinath15@gmail.com",
//   "order_O5jC0SkpfgID6V"
// );
