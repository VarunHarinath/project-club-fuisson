import EventModel from "../models/eventModule.js";

// Find all events
const eventFind = async (req, res) => {
  try {
    const response = await EventModel.find({});
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

// Find event by ID
const eventFindById = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await EventModel.findById({ _id: id });
    res.json(response);
  } catch (error) {
    console.log(error);
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
    });
    res.json({ message: true });
  } catch (error) {
    res.json(error);
  }
};

export { eventFind, eventPost, eventFindById };
