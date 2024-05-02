import path from "path";
import puppeteer, { Browser, defaultArgs } from "puppeteer";
import fs from "fs";
import { fileURLToPath } from "url";
import MailSender from "./MailSender.js";

const PdfMakerAndMail = async (
  userId,
  name,
  email,
  phoneNumber,
  orderId,
  qrCode,
  event,
  venue
) => {
  const htmlContent = `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <style>
              body,
              html {
                height: 100%;
                margin: 0;
                font-family: Arial, sans-serif;
              }
              .container {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 2px solid black;
                padding: 20px;
              }
              .title {
                text-align: center;
                font-size: 24px;
                margin-bottom: 20px;
              }
              .content {
                display: flex;
                width: 100%;
              }
              .qr-code {
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .details {
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 20px;
                border-left: 2px solid black;
              }
              .detail {
                margin-bottom: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="title">${event}</div>
              <div class="content">
                <div class="qr-code">
                  <img src="${qrCode}" alt="QR Code" />
                </div>
                <div class="details">
                  <div class="detail"><strong>Name:</strong>${name}</div>
                  <div class="detail"><strong>Email:</strong>${email}</div>
                  <div class="detail">
                    <strong>Phone Number:</strong>${phoneNumber}
                  </div>
                  <div class="detail"><strong>Order ID:</strong>${orderId}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
        `;
  try {
    const broswer = await puppeteer.launch({ headless: true });
    const page = await broswer.newPage();
    await page.setContent(htmlContent);
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pdfDirectory = path.join(__dirname, "participants_pdf");
    if (!fs.existsSync(pdfDirectory)) {
      fs.mkdirSync(pdfDirectory, { recursive: true });
    }

    const pdfPath = path.join(__dirname, "participants_pdf", `${orderId}.pdf`);

    await page.pdf({ path: pdfPath, format: "A4" });
    await broswer.close();
    const mailResponse = await MailSender(event, userId, name, email, orderId);
    if (mailResponse) {
      fs.unlink(pdfPath, (err) => {
        if (err) {
          console.error("Failed to delete the file:", err);
        } else {
          console.log("File deleted successfully");
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export default PdfMakerAndMail;
