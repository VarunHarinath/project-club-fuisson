import express from "express";
import {
  clubFind,
  clubFindById,
  clubPost,
} from "../controllers/ClubController.js";

const clubRoute = express.Router();

clubRoute.get("/", clubFind);
clubRoute.get("/:clubId", clubFindById);
clubRoute.post("/", clubPost);

export default clubRoute;
