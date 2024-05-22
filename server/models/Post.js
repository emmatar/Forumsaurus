const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  profile_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  },
  rawrs: {
    type: Number,
    default: 0
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;