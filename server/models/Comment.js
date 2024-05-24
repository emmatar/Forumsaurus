const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  commentBody: {
    type: String,
    required: true,
  },
  profile: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Profile",
  },
  post: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Post",
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
