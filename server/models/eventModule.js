import mongoose from "mongoose";

// Define the schema for the event
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
  eventVenue: {
    type: String,
    required: true,
  },
  hostedBy: {
    type: String,
    required: true,
  },
  lastDate: {
    type: Date,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Create the model using the schema
const EventModel = mongoose.model("Event", EventSchema);

// Export the model
export default EventModel;
