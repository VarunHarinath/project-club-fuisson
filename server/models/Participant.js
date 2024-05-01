import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    default: null,
  },
  paymentId: {
    type: String,
    default: null,
  },
  qrCode: {
    type: String,
    default: null,
  },
});

const participantModel = mongoose.model("Participants", FormSchema);

export default participantModel;
