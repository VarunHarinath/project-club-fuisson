import clubModel from "../models/ClubModel.js";

const clubFind = async (req, res) => {
  try {
    const response = await clubModel.find({});
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

const clubFindById = async (req, res) => {
  try {
    const { clubId } = req.params;
    const response = await clubModel.findById({ _id: clubId });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

const clubPost = async (req, res) => {
  try {
    const { title, subTitle, leadMember, coLeadMember } = req.body;
    const response = await clubModel.create({
      title,
      subTitle,
      leadMember,
      coLeadMember,
    });
    res.status(201).json({ message: true });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { clubFind, clubFindById, clubPost };
