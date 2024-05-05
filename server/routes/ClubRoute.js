import express from "express";
import {
  clubDelete,
  clubFind,
  clubFindById,
  clubPost,
  clubUpdate,
} from "../controllers/ClubController.js";

const clubRoute = express.Router();

clubRoute.get("/", clubFind);
clubRoute.get("/:clubId", clubFindById);
clubRoute.patch("/:clubId", clubUpdate);
clubRoute.delete("/:clubId", clubDelete);
clubRoute.post("/", clubPost);

export default clubRoute;
