const router = require("express").Router();
const placeRouter = require("./place.route");
const reviewRouter = require("./review.route")

// Place routes
router.use("/place", placeRouter);
router.use('/review', reviewRouter);

module.exports = router;
