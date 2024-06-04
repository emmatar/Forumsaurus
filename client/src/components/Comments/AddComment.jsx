import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";

const AddComment = ({ postId }) => {
    const [commentText, setCommentText] = useState("");

    const [addComment] = useMutation(ADD_COMMENT);

    const handlePostComment = async () => {
        if (commentText.trim() === "") {
            return;
        }

        try {
            await addComment({
                variables: {
                    postId: postId,
                    commentBody: commentText
                }
            });

            setCommentText("");
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    return (
        <div className="list-group-item border border-top-0 border-2 d-flex gap-3 py-3">
            <img
                src="#"
                alt="twbs"
                width="32"
                height="32"
                className="rounded-circle bg-warning p-1 flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handlePostComment}>
                    Post
                </button>
            </div>
        </div>
    );
};

export default AddComment;