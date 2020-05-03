const router = require("express").Router();
const placeController = require("./controllers");

// Matches with "/api/books"
router.route("/")
  .get(placeController.findAll)
  .post(placeController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(placeController.findById)
  .put(placeController.update)
  .delete(placeController.remove);

module.exports = router;

