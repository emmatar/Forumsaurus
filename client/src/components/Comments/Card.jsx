import React from 'react';

const CommentCard = ({ comment }) => {
    return (
        <div className="list-group-item border border-top-0 border-2 d-flex gap-3 py-3">
            <img src='#' alt="twbs" width="32" height="32" className="rounded-circle bg-warning p-1 flex-shrink-0" />
            <div className="d-flex gap-2 w-100 justify-content-between">
                <div className="p-0 m-0">
                    <small className="opacity-75">
                        <strong>{comment.profile.username}:</strong>
                    </small>
                    <p className="my-2">
                        {comment.commentBody}
                    </p>
                </div>
                {/* <small className="opacity-50 text-nowrap">{comment.createdOn}</small> */}
            </div>
        </div>
    );
};

export default CommentCard;