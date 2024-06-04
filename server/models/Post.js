const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
  comments:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  }],
  rawrs: {
    type: Number,
    default: 0,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
