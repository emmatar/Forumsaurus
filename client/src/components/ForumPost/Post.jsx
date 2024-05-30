import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dinoEgg from '../../assets/dinoEgg.svg';
import CommentCard from '../Comments/Card';

// TODO: Logic to fetch posts

// TODO: Logic to fetch comments

const ForumPost = ({ post }) => {
	// State to store posts


	return (
		<div className='d-flex flex-column flex-row pl-0 mt-1 gap-4 pb-5 align-items-center justify-content-center'>
			<div className='list-group w-100 container-fluid'>
                <div
                    key={post.id}
                    className='list-group-item border border-2 d-flex gap-3 py-3'
                    aria-current='true'>
                    <img
                        src={dinoEgg}
                        alt='twbs'
                        width='40'
                        height='40'
                        className='rounded-circle bg-warning p-1 flex-shrink-0'
                    />
                    <div className='d-flex gap-2 w-100 justify-content-between'>
                        <div>
                            <Link
                                className='text-decoration-none text-black'>
                                <h4 className='mb-0 fw-bolder mb-2'>{post.title}</h4>
                            </Link>
                            <p className='mb-0'>{post.body}</p>
                            <div className='d-flex px-0 gap-1 align-items-center'>
                                <button className='btn btn-sm bg-primary border text-white py-2 px-3 rounded-pill d-flex align-items-center gap-1 justify-content-start'>
                                    <img
                                        src={dinoEgg}
                                        style={{ filter: 'invert(1)' }}
                                        alt='twbs'
                                        width='16'
                                        height='16'
                                        className='flex-shrink-0'></img>
                                    <p className='mb-0'>{post.rawrs} rawr!'s</p>
                                </button>
                                <button className='btn btn-sm bg-primary border text-white py-2 px-3 rounded-pill d-flex align-items-center gap-1 justify-content-start'>
                                    <img
                                        src={dinoEgg}
                                        style={{ filter: 'invert(1)' }}
                                        alt='twbs'
                                        width='20'
                                        height='20'
                                        className='flex-shrink-0'></img>
                                    <p className='mb-0'>{post.comments.length} comments</p>
                                </button>
                            </div>
                        </div>
                        <small className='opacity-50 text-nowrap'>{post.createdOn}</small>
                        <button onClick={() => deletePost(post.id)}>Delete Post</button>
                    </div>
                </div>
                <div className='list-group'>
                    {post.comments.map((comment) => (
                        <CommentCard key={comment.id} comment={comment} />
                    ))}
                </div>
            </div>
		</div>
	);
};

export default ForumPost;
