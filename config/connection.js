const { connect, connection } = require('mongoose')

const connectionString =
mongoose.connect || 'mongodb://127.0.0.1:27017/myapp';

    connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;

// const mongoose = require("mongoose");

// // Wrap Mongoose around local connection to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/Social_Newtork", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Export connection
// module.exports = mongoose.connection;

// process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Social_Network';