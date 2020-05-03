const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter your name"
  },
  place: {
    type: String,
    trim: true,
    required: "Enter ypur place"
  },
  review: {
      type: String,
      min: 6,
      required: "Enter your review"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const reviewSchema = mongoose.model("reviewSchema", reviewSchema);

module.exports = reviewSchema;
