import { Navigate, useParams } from 'react-router-dom';
import { useQuery, } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import errorDino from '../assets/dinoEgg.svg'

import { ProfileOverview, ProfilePosts, ProfileComments } from '../components/ProfileLists';
import CommentCard from '../components/Comments/Card';

const ProfileTemp = () => {
    const [selectedTab, setSelectedtab] = useState('overview');

    const handleTabClick = (tab) => {
        setSelectedtab(tab);
    }

    const comments = [
        {
            id: 1,
            author: 'CommentAuthor',
            body: 'CommentBody',
            reply: 'ReplyBody',
            createdOn: '1d',
            comments: [
                {
                    id: 1,
                    author: 'CommentAuthor',
                    body: 'CommentBody',
                    reply: 'ReplyBody',
                    createdOn: '1d',
                },
                {
                    id: 2,
                    author: 'CommentAuthor',
                    body: 'CommentBody',
                    reply: 'ReplyBody',
                    createdOn: '1d',
                },
            ]
        }
    ];

    return (
        <main>
            <section className='mb-0'>
                <div className="col-sm-8 pr-4 pt-5" id="featured-3">
                    <div className="pt-5">
                        <div className="feature border border-2 p-4">
                            <div className='d-flex align-items-center'>
                                <div className="feature-icon rounded-circle d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                    <svg className="bi rounded" width="2em" height="2em"><use xlinkHref="#collection"></use></svg>
                                </div>
                                <div className="ms-3">
                                    <h3 className="fs-2 text-body-emphasis">USERNAME</h3>
                                </div>
                            </div>
                            <div className='container-fluid'>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                <div className=''>
                                    <button id='showUserOverview' onClick={() => handleTabClick('overview')} type="button" className="btn rounded-pill border border-primary border-2 text-primary fw-bolder btn-white">Profile</button>
                                    <button id='showuserPosts' onClick={() => handleTabClick('posts')} type="button" className="btn rounded-pill border border-primary border-2 text-primary fw-bolder btn-white mx-2">Posts</button>
                                    <button id='showUserComments' onClick={() => handleTabClick('comments')} type="button" className="btn rounded-pill border border-primary border-2 text-primary fw-bolder btn-white">Comments</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="d-flex flex-column flex-row pl-0 mt-1 gap-4 pb-5 align-items-center justify-content-center">
                        <div className="list-group w-100 conatiner-fluid">
                            {selectedTab === 'overview' && <ProfileOverview />}
                            {selectedTab === 'posts' && <ProfilePosts />}
                            {selectedTab === 'comments' && comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default ProfileTemp;

