import { Navigate, useParams } from 'react-router-dom';
import { useQuery, } from '@apollo/client';
import { useState, useEffect } from 'react';
import errorDino from '../assets/dinoEgg.svg'

const handleClick = (sectiontoAppend) => {
    setSection((previousSection => [...previousSection, sectionToAppend]))
}

const ProfileTemp = () => {
    return (
        <main>
            <section>
                <div className="px-4 py-5" id="featured-3">
                    <div className="col-sm-12 g-4 py-5">
                        <div className="feature border border-2 p-4 col-8">
                            <div className='container-fluid d-flex align-items-center'>
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
                                    <button onClick={handleClick} id='showUserProfile' type="button" className="btn rounded-pill border border-primary border-2 text-primary fw-bolder btn-white">Profile</button>
                                    <button type="showUserPosts" className="btn rounded-pill border border-primary border-2 text-primary fw-bolder btn-white mx-2">Posts</button>
                                    <button type="showUserComments" className="btn rounded-pill border border-primary border-2 text-primary fw-bolder btn-white">Comments</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default ProfileTemp;

