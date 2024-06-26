// Dependenceis
import express from "express";
import cors from "cors";
import axios from "axios";
import cron from "node-cron";
// file imports
import connectToMongoDB from "./db/Connectdb.js";
import EventRoute from "./routes/EventRoute.js";
import clubRoute from "./routes/ClubRoute.js";
import participantRoute from "./routes/ParticipantRoute.js";
import paymentRoute from "./routes/PaymentRoute.js";
// instance creation
const app = express();
// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// database connection
connectToMongoDB();

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});
// Event Router
app.use("/events", EventRoute);

// Club Router
app.use("/clubs", clubRoute);

// Participant Route
app.use("/participants", participantRoute);

// Payment Routes
app.use("/payments", paymentRoute);
const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, (req, res) =>
  console.log(`Server running on port ${PORT}`)
);
