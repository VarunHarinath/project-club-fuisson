import clubModel from "../models/ClubModel.js";

const clubFind = async (req, res) => {
  try {
    const response = await clubModel.find({});
    if (!response) {
      res.status(500).json({ message: false });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

const clubUpdate = async (req, res) => {
  try {
    const { clubId } = req.params;
    const { title, subTitle, leadMember, coLeadMember } = req.body;
    const updateData = {
      title,
      subTitle,
      leadMember,
      coLeadMember,
    };
    const response = await clubModel.findByIdAndUpdate(
      clubId,
      { $set: updateData },
      { new: true, runValidators: true }
    );
    if (!response) {
      res.status(500).json({ message: false });
    }
    res.json({ message: true });
  } catch (error) {
    res.status(500).json(error);
  }
};

const clubFindById = async (req, res) => {
  try {
    const { clubId } = req.params;
    const response = await clubModel.findById({ _id: clubId });
    if (!response) {
      res.status(500).json({ message: false });
    }
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
    if (!response) {
      res.status(500).json({ message: false });
    }
    res.status(201).json({ message: true });
  } catch (error) {
    res.status(500).json(error);
  }
};

const clubDelete = async (req, res) => {
  try {
    const { clubId } = req.params;
    const response = await clubModel.findByIdAndDelete(clubId);
    if (!response) {
      res.status(500).json({ message: false });
    }
    res.status(200).json({ message: true });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { clubFind, clubFindById, clubPost, clubUpdate, clubDelete };
