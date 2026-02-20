const Inquiry = require('../models/Inquiry');

const createInquiry = async (req, res) => {
  try {
    const { name, phone, date, guests } = req.body;
    const newInquiry = new Inquiry({ name, phone, date, guests });
    await newInquiry.save();
    res.status(201).json({ message: "Inquiry submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server Error: Could not save inquiry" });
  }
};
const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch inquiries" });
  }
};
const delfindById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInquiry = await Inquiry.findByIdAndDelete(id);

    if (!deletedInquiry) {
      return res.status(404).json({ message: "Inquiry not found!" });
    }

    res.status(200).json({ message: "Inquiry deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting inquiry", error });
  }
};

module.exports = { createInquiry, getAllInquiries,delfindById};