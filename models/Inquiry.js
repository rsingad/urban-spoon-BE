const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  guests: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Inquiry', inquirySchema);