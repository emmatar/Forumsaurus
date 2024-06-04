import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "../components/Comments/Card.jsx";
import AddComment from "../components/Comments/AddComment.jsx";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries.js";

const PostDetails = () => {
  const { postId } = useParams();
  const { data } = useQuery(QUERY_POSTS);
  const post = data?.posts.find((p) => p._id === postId);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div>
      {/* Display post details */}
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      {/* Display comments */}
      {post.comments &&
        post.comments.map((comment) => (
          <CommentCard key={comment._id} comment={comment} />
        ))}

      {/* Add a new comment */}
      <AddComment postId={postId} />
    </div>
  );
};

export default PostDetails;
