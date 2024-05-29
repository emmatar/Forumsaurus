import React, { useState } from 'react';
import { Link } from "react-router-dom";
import dinoEgg from "../../assets/dinoEgg.svg";

const ProfileOverview = () => {
    // State to store posts
    const [posts, setPosts] = useState([
        {
            id: 1,
            body: 'Post Body 1',
            rawrs: 0,
            comments: 0,
            createdOn: '1d'
        }
    ]);

    // Function to add a new post
    const addPost = () => {
        const newPost = {
            id: posts.length + 1,
            body: 'New Post Body',
            rawrs: 0,
            comments: 0,
            createdOn: '1h'
        };

        setPosts([...posts, newPost]);
    }

    // Function to delete a post by ID
    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    }

    return (
        <div className="d-flex flex-column flex-row pl-0 mt-1 gap-4 pb-5 align-items-center justify-content-center">
            <div className="list-group w-100 conatiner-fluid">
                {posts.map(post => (
                    <div key={post.id} className="list-group-item border border-2 d-flex gap-3 py-3" aria-current="true">
                        <img src={dinoEgg} alt="twbs" width="32" height="32" className="rounded-circle bg-warning p-1 flex-shrink-0" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <Link to="#" className="text-decoration-none text-black">
                                    <h5 className="mb-0 fw-bolder mb-2">{post.body}</h5>
                                </Link>
                                <div className="d-flex px-0 gap-1 align-items-center">
                                    <button className="bg-primary border text-white py-2 px-3 rounded-pill d-flex align-items-center gap-1 justify-content-start">
                                        <img src={dinoEgg} style={{ filter: 'invert(1)' }} alt="twbs" width="20" height="20" className="flex-shrink-0"></img>
                                        <p className="mb-0">{post.rawrs} rawr!'s</p>
                                    </button>
                                    <button className="bg-primary border text-white py-2 px-3 rounded-pill d-flex align-items-center gap-1 justify-content-start">
                                        <img src={dinoEgg} style={{ filter: 'invert(1)' }} alt="twbs" width="20" height="20" className="flex-shrink-0"></img>
                                        <p className="mb-0">{post.comments} comments</p>
                                    </button>
                                </div>
                            </div>
                            <small className="opacity-50 text-nowrap">{post.createdOn}</small>
                            <button onClick={() => deletePost(post.id)}>Delete Post</button>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={addPost}>Add Post</button>
        </div>
    )
}

export default ProfileOverview;
