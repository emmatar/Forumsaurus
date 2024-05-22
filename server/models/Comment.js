const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  profile_id: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
  },
  post_id: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;