const Thought = require("../models/Thought");

module.exports = {
    getAllThoughts(req, res) {
        Thought.find()
          .then((thoughts) => res.json(thoughts))
          .catch((err) => res.status(500).json(err));
}

};