const router = require("express").Router();
const reviewSchema = require("../models/reviewSchema.js");

router.post("/api/review", ({ body }, res) => {
  reviewSchema.create(body)
    .then(dbReview => {
      res.json(dbReview);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/review", (req, res) => {
  reviewSchema.find({})
    .sort({ date: -1 })
    .then(dbReview => {
      res.json(dbReview);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
