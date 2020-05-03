const router = require("express").Router();
const placeSchema = require("../models/placeSchema.js");

router.post("/api/place", ({ body }, res) => {
  placeSchema.create(body)
    .then(dbPlace => {
      res.json(dbPlace);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/place", (req, res) => {
  placeSchema.find({})
    .then(dbPlace => {
      res.json(dbPlace);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
