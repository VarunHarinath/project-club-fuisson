import express from "express";
import connectToMongoDB from "./db/Connectdb.js";
import EventRoute from "./routes/EventRoute.js";

const app = express();
app.use(express.json());

connectToMongoDB();

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/events", EventRoute);

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, (req, res) =>
  console.log(`Server running on port ${PORT}`)
);
