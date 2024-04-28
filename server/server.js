// Dependenceis
import express from "express";
import cors from "cors";
// file imports
import connectToMongoDB from "./db/Connectdb.js";
import EventRoute from "./routes/EventRoute.js";
import clubRoute from "./routes/ClubRoute.js";
// instance creation
const app = express();
// Middlewares
app.use(express.json());
app.use(cors());

// database connection
connectToMongoDB();

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});
// Event Router
app.use("/events", EventRoute);

// Club Router
app.use("/clubs", clubRoute);
const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, (req, res) =>
  console.log(`Server running on port ${PORT}`)
);
