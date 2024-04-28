import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  leadMember: {
    type: String,
    required: true,
  },
  coLeadMember: {
    type: String,
    required: true,
  },
});

const clubModel = mongoose.model("club", clubSchema);

export default clubModel;
