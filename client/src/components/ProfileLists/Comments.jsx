import React, { useState } from 'react';
import { Link } from "react-router-dom";
import dinoEgg from "../../assets/dinoEgg.svg";

const ProfileComments = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            author: 'CommentAuthor',
            body: 'CommentBody',
            reply: 'ReplyBody',
            createdOn: '1d'
        }
    ]);

    const addComment = () => {
        const newComment = {
            id: comments.length + 1,
            author: 'NewCommentAuthor',
            body: 'NewCommentBody',
            reply: 'NewReplyBody',
            createdOn: '1h'
        };

        setComments([...comments, newComment]);
    }

    const deleteComment = (id) => {
        setComments(comments.filter(comment => comment._id !== id));
    }

    return (
        <div className="d-flex flex-column flex-row pl-0 mt-1 gap-4 pb-5 align-items-center justify-content-center">
            <div className="list-group w-100 conatiner-fluid">
                {comments.map(comment => (
                    <Link
                        key={comment._id}
                        to="#"
                        className="list-group-item list-group-item-action border border-2 d-flex gap-3 py-3"
                        aria-current="true"
                    >
                        <img src={dinoEgg} alt="twbs" width="32" height="32" className="rounded-circle bg-warning p-1 flex-shrink-0" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div className="p-0 m-0">
                                <small className="opacity-75">
                                    <strong>ProfileUsername</strong> replied to <strong>{comment.author}</strong>'s comment, "{comment.content}"
                                </small>
                                <p className="my-2">
                                    {comment.reply}
                                </p>
                            </div>
                            <div className="p-0 m-0">
                                <div class='text-nowrap'>
                                    <small className="opacity-50 text-nowrap">{comment.createdOn}</small>
                                </div>
                                <a href="#" onClick={() => deleteComment(comment.id)} className="float-end">
                                    <small className='opacity-50 text-nowrap'>Delete</small>
                                </a>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <button onClick={addComment}>Add Comment</button>
        </div>
    )
}

export default ProfileComments;