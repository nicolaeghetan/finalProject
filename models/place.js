const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter your name"
  },
  location: {
    type: String,
    trim: true,
    required: "Enter desired location"
  },
  comments: {
      type: String,
      min: 6,
      required: "Enter your review"
  },
  phoneNumber: {
      type: Number,
      required: "Enter your phone number",
      min: [7 , 'Your  phome number must be at least 7 digits'],
      max: [12, "Your phone number must have not more then 12 digits"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const placeSchema = mongoose.model("placeSchema", placeSchema);

module.exports = placeSchema;