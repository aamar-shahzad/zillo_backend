const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  experience: {
    type: String,
  },
  Description: {
    type: String,
  },
  website: {
    type: String,
  },
  photoUrl: {
    type: String,
  },
  languages: {
    type: String,
  },
  recommendationCount: { type: Number, default: 0 },
  firstName: { type: String, default: "John" }, // first name   is required for first name validation   to      work    properly

  lastName: { type: String, default: "John" }, // last
});

module.exports = mongoose.model("brokerData", dataSchema);
