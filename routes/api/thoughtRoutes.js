const router = require("express").Router();

// all of the requirements
const {
  getAllThoughts,
  createNewThought,
  getThoughtsById,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtControllers");

// get/create thoughts
router.route("/").get(getAllThoughts).post(createNewThought);
router.route("/:id").get(getThoughtsById)
  // find thoughts by id activity 23 is what I am goin off

  .put(updateThought)
  .delete(deleteThought);
router.route("/:id/reactions").post(addReaction);
router.route("/:id/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
