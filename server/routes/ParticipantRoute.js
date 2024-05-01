import express from "express";
import {
  deleteParticipant,
  getParticipants,
  getParticipantsById,
  postParticipant,
  putParticipantOrderId,
  putParticipantQrCode,
} from "../controllers/ParticipantController.js";

const participantRoute = express.Router();

participantRoute.get("/", getParticipants);
participantRoute.get("/:id", getParticipantsById);
participantRoute.post("/", postParticipant);
participantRoute.delete("/:id", deleteParticipant);
participantRoute.put("/orderId/:id", putParticipantOrderId);
participantRoute.put("/qrCode/:id", putParticipantQrCode);

export default participantRoute;
