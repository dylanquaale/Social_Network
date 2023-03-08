const { Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
    username: {
        type: String,
        unique: true,
        required: 'username required', 
        trim: true
    },

    email: {
        type: String,
        require: 'email is required',
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email address",
        ],
    },
    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }

);

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });

  const User = model("User", userSchema);


module.exports = User