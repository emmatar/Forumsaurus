import React from "react";

const AddComment = () => {
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
                    />
                </div>
                <button type="button" className="btn btn-primary">
                    Post
                </button>
            </div>
        </div>
    );
};
