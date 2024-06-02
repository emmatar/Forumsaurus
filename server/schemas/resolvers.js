const { Profile, Post, Comment } = require("../models");

const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find().populate({
        path: "posts",
        populate: { path: "comments" },
      });
    },
    posts: async () => {
      return await Post.find().populate({path:"rawrs",path:"comments",path:"profile"});
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.profile) {
        const userData = await Profile.findOne({
          _id: context.profile._id,
        }).populate({ path: "posts", populate: { path: "comments" } });
        return userData;
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    // Mutation to add profile with arguments utilizing token
    addProfile: async (parent, { username, email, password }) => {
      const profile = await Profile.create({ username, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw AuthenticationError;
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(profile);
      return { token, profile };
    },
    editBio: async (parent, { bio }, context) => {
      if (context.profile) {
        return Profile.findByIdAndUpdate(
          context.profile._id,
          { bio },
          { new: true }
        );
      }
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.profile) {
        return Profile.findOneAndDelete({ _id: context.profile._id });
      }
      throw AuthenticationError;
    },

    addPost: async (parent, { title, content }, context) => {
      console.log(context.profile)
      if (context.profile) {
        const newPost = await Post.create({
          title,
          content,
          profile: context.profile._id,
        });

        await Profile.findOneAndUpdate(
          { _id: context.profile._id },
          { $addToSet: { posts: newPost._id } }
        );

        return newPost;
      }
      console.log('error')
      throw AuthenticationError;
    },
    addComment: async (parent, { postId, commentBody }, context) => {
      if (context.profile) {
        const newComment = await Comment.create({
          commentBody,
          profile: context.profile._id,
          post: postId,
        });

        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          { $addToSet: { comments: newComment._id } },
          { new: true, runValidators: true }
        );
        return updatedPost;
      }
      throw AuthenticationError;
    },
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const deletedPost = await Post.findOneAndDelete({ _id: postId });

        await Profile.findOneAndUpdate(
          { _id: context.profile._id },
          { $pull: { posts: deletedPost._id } }
        );

        return deletedPost;
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $pull: {
              comments: { _id: commentId },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
