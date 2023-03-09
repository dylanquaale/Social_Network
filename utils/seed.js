const connection = require("../config/connection");
const { Thoughts, User } = require("../models");

connection.on("error", (err) => err);
connection.once("open", async () => {
  await Thoughts.deleteMany({});
  await User.deleteMany({});


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
      reaction: "my first reaction"
    },
  ];


  await User.collection.insertMany(users);
  await Thoughts.collection.insertMany(thoughts);


  console.log("seed is planted 🌱");
  process.exit(0);
});
