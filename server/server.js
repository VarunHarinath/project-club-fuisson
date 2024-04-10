import express from "express";
import connectToMongoDB from "./db/Connectdb.js";

const app = express();

connectToMongoDB();

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, (req, res) =>
  console.log(`Server running on port ${PORT}`)
);
