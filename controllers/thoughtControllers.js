const { User, Thought } = require("../models");

module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getThoughtsById(req, res) {
    Thought.findOne({ _id: req.params.id })
      .select("-__v")
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },

  createNewThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "thought created, but found no user with that ID",
            })
          : res.json("Thought Created 🎉")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    Thought.findOneAndRemove(
      { _id: req.params.id },
      { $pull: { thoughts: req.params.id } },
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  // addReaction(req, res) {
  //   Thought.findOneAndUpdate(
  //     { _id: req.params.id },
  //     { $addToSet: { reaction: req.body } },
  //     { runValidators: true, new: true }
  //   )
  //     .then((reaction) =>
  //       !reaction
  //         ? res.status(404).json({ message: "No thought with this id!" })
  //         : res.json(reaction)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // },

  addReaction(req, res) {
    Thought.create(req.body)
      .then((reaction) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { reaction: reaction._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "reaction created, but found no user with that ID",
            })
          : res.json("Reaction Created 🎉")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
