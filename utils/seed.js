const connection = require("../config/connection");
const { Thoughts, User, Reaction } = require("../models");

connection.on("error", (err) => err);
connection.once("open", async () => {
  await Thoughts.deleteMany({});
  await User.deleteMany({});
  await Reaction.deleteMany({});

  let users = [
    {
      username: "Paul",
      email: "paul@gmail.comd",
    },
  ];

  let thoughts = [
    {
      username: "Paul",
      thoughtText: "Hello world",
    },
  ];
  let reactions = [
    {
      reactionText: "My first reaction",
    },
  ];

  await User.collection.insertMany(users);
  await Thoughts.collection.insertMany(thoughts);
  await Reaction.collection.insertMany(reactions);

  console.log("seed is planted 🌱");
  process.exit(0);
});
