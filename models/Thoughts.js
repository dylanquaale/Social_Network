const { Schema, model} = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now(),
        },

    },

    {
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
      }

);
const Thoughts = model("Thought", thoughtSchema);

module.exports = Thoughts