import React, { useState } from "react";
import { Link } from "react-router-dom";
import dinoEgg from "../assets/dinoEgg.svg";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import { QUERY_POSTS } from "../utils/queries";

const ProfilePosts = ({ username }) => {
  const {loading,data} = useQuery(QUERY_POSTS)
  const posts = data?.posts ?? []
 const [addPost] = useMutation(ADD_POST)
const [newPostTitle, setNewPostTitle] = useState('')
const [newPostBody, setNewPostBody] = useState('')
const addNewPost = async () => {
  if (!newPostTitle || !newPostBody){
    return
  }
  await addPost({
    variables: {
      title: newPostTitle,
      content: newPostBody
    },
    refetchQueries: [QUERY_POSTS,"posts"]
  })
}
  // Function to delete a post by ID
  const deletePost = (id) => {
    
  };

  // Function to add a new comment to a post
  const addComment = (postId) => {
   
    
  };

  // Function to delete a comment from a post
  const deleteComment = (postId, commentIndex) => {
   

    
  };

  return (
    <div className="d-flex flex-column flex-row pl-0 mt-1 gap-4 pb-5 align-items-center justify-content-center">
      <div className="list-group w-100 container-fluid">
        {loading && (
          <h1>Loading...</h1>
        )}
        {!loading && !posts.length && (
          <h1>No Current Posts</h1>
        )}
        {!loading && posts.length>0 && posts.map((post) => (
          <div key={post.id} className="list-group-item border border-2 d-flex gap-3 py-3" aria-current="true">
            <img src={dinoEgg} alt="twbs" width="32" height="32" className="rounded-circle bg-warning p-1 flex-shrink-0" />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <Link to="#" className="text-decoration-none text-black">
                  <h5 className="mb-0 fw-bolder mb-2">{post.title}</h5>
                </Link>
                <p>{post.body}</p> {/* Display the post content */}
                <div className="d-flex px-0 gap-1 align-items-center">
                  <button className="bg-primary border text-white py-2 px-3 rounded-pill d-flex align-items-center gap-1 justify-content-start">
                    <img src={dinoEgg} style={{ filter: "invert(1)" }} alt="twbs" width="20" height="20" className="flex-shrink-0"></img>
                    <p className="mb-0">{post.rawrs} rawr!'s</p>
                  </button>
                  <button className="bg-primary border text-white py-2 px-3 rounded-pill d-flex align-items-center gap-1 justify-content-start">
                    <img src={dinoEgg} style={{ filter: "invert(1)" }} alt="twbs" width="20" height="20" className="flex-shrink-0"></img>
                    <p className="mb-0">{post.comments?.length ? post.comments.length : "0"} comments</p>
                  </button>
                </div>
                {post.comments?.map((comment, index) => (
                  <div key={index}>
                    <p>
                      <strong>{comment.profileName}:</strong> {comment.text}
                    </p>
                    <button onClick={() => deleteComment(post.id, index)}>Delete Comment</button>
                  </div>
                ))}
                {/* <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Enter new comment"
                /> */}
                <button onClick={() => addComment(post.id)}>Add Comment</button>
              </div>
              <small className="opacity-50 text-nowrap">{post.createdOn}</small>
              <button onClick={() => deletePost(post.id)}>Delete Post</button>
            </div>
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addNewPost();
        }}
      >
        <input
          type="text"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          placeholder="Enter new post title"
        />
        <input
          type="text"
          value={newPostBody}
          onChange={(e) => setNewPostBody(e.target.value)}
          placeholder="Enter new post body"
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
  };
  
  export default ProfilePosts;