import express from "express";
import {
  eventFind,
  eventPost,
  eventFindById,
  eventUpdate,
  eventDelete,
} from "../controllers/EventController.js";

const EventRoute = express.Router();

EventRoute.get("/", eventFind);
EventRoute.post("/", eventPost);
EventRoute.get("/:eventId", eventFindById);
EventRoute.patch("/:eventId", eventUpdate);
EventRoute.delete("/:eventId", eventDelete);

export default EventRoute;
