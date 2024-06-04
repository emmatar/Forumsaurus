import ForumPost from "../components/ForumPost/Post";
import React from "react";
import { Link } from "react-router-dom";


const Post = ({ post }) => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          <ForumPost
            key={post._id}
            post={post}
          />
        </div>
      </div>
    </main>
  );
};

export default Post;
