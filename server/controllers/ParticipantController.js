import mongoose from "mongoose";
import participantModel from "../models/Participant.js";

const getParticipants = async (req, res) => {
  try {
    const response = await participantModel.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

const postParticipant = async (req, res) => {
  try {
    const { name, email, phoneNumber, rollNumber, price, event } = req.body;
    const response = await participantModel.create({
      name,
      email,
      phoneNumber,
      rollNumber,
      price,
      event,
    });
    res.status(201).json({ message: true, id: response._id });
  } catch (error) {
    res.status(500).json({ message: false });
  }
};

const deleteParticipant = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await participantModel.findByIdAndDelete(id);
    if (!response) {
      res.status(404).json({ message: true });
    } else {
      res.status(204).json({ message: true });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: false });
  }
};

const putParticipantOrderId = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderId } = req.body;
    const response = await participantModel.findByIdAndUpdate(id, {
      orderId,
    });
    if (response) {
      res.status(404).json({ message: true });
    } else {
      res.status(204).json({ message: true });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: false });
  }
};

const putParticipantQrCode = async (req, res) => {
  try {
    const { id } = req.params;
    const { qrCode } = req.body;
    const response = await participantModel.findByIdAndUpdate(id, {
      qrCode,
    });
    if (response) {
      res.status(204).json({ message: true });
    } else {
      res.status(404).json({ message: true });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: false });
  }
};

export {
  getParticipants,
  postParticipant,
  deleteParticipant,
  putParticipantOrderId,
  putParticipantQrCode,
};
