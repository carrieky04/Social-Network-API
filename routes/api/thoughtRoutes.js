const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  udpateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(udpateThought)
  .delete(deleteThought);

// /api/thought/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addThoughtReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeThoughtReaction);

module.exports = router;
