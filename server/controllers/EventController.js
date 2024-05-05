import EventModel from "../models/eventModule.js";

// Find all events
const eventFind = async (req, res) => {
  try {
    const response = await EventModel.find({});
    if (!response) {
      res.status(500).json({ message: false });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find event by ID
const eventFindById = async (req, res) => {
  const id = req.params.eventId;
  try {
    const response = await EventModel.findById({ _id: id });
    if (!response) {
      res.status(500).json({ message: false });
    }
    res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Create a new event
const eventPost = async (req, res) => {
  try {
    const {
      eventName,
      eventDescription,
      eventDate,
      eventYear,
      eventVenue,
      hostedBy,
      lastDate,
      status,
      price,
    } = req.body;
    const response = await EventModel.create({
      eventName,
      eventDescription,
      eventDate,
      eventYear,
      eventVenue,
      hostedBy,
      lastDate,
      status,
      price,
    });
    if (!response) {
      res.status(500).json({ message: false });
    }
    res.json({ message: true });
  } catch (error) {
    res.status(500).json(error);
  }
};

const eventUpdate = async (req, res) => {
  const id = req.params.eventId;
  try {
    const {
      eventName,
      eventDescription,
      eventDate,
      eventYear,
      eventVenue,
      hostedBy,
      lastDate,
      status,
      price,
    } = req.body;
    const updateData = {
      eventName,
      eventDescription,
      eventDate,
      eventYear,
      eventVenue,
      hostedBy,
      lastDate,
      status,
      price,
    };

    const response = await EventModel.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );
    if (!response) {
      res.status(500).json({ message: false });
    }
    res.status(201).json({ message: true });
  } catch (error) {
    res.status(500).json(error);
  }
};

const eventDelete = async (req, res) => {
  const id = req.params.eventId;
  try {
    const response = await EventModel.findByIdAndDelete(id);
    if (!response) {
      res.status(500).json({ message: false });
    }
    res.status(200).json({ message: true });
  } catch (error) {
    res.status(500).json({ message: false });
  }
};

export { eventFind, eventPost, eventFindById, eventUpdate, eventDelete };
