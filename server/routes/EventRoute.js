import express from "express";
import {
  eventFind,
  eventPost,
  eventFindById,
} from "../controllers/EventController.js";

const EventRoute = express.Router();

EventRoute.get("/", eventFind);
EventRoute.post("/", eventPost);
EventRoute.get("/:id", eventFindById);

export default EventRoute;
