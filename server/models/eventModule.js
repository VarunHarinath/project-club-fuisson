import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
  eventYear: {
    type: String,
    required: true,
  },
});

const EventModel = mongoose.model("Event", EventSchema);
export default EventModel;
