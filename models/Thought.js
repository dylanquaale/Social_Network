const { Schema, model, Types} = require("mongoose");
const dateFormerter = require("../utils/formatDate");

// reaction id/reaction body text/ user who created reaction/ when reaction was created
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormerter(timestamp)
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

// users thoughts/ date creates/ username 
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormerter(timestamp)
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },

  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// module exports 
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
