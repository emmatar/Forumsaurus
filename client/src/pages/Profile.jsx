import { Navigate, useParams } from 'react-router-dom';
import { useQuery, } from '@apollo/client';
import { useMutation } from '@apollo/client';


import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import { useState, useEffect } from 'react';
import errorDino from '../assets/dinoEgg.svg'

const Profile = () => {
  const { profileId } = useParams(); 
  const [topPost,setTopPost] = useState();
  const [otherPosts,setOtherPosts] = useState([]);
  
  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile;
  useEffect(()=>{
    if (profile?.posts?.length){
      const sortedPosts = profile.posts.sort((a,b)=>{
        a?.rawrs > b?.rawrs
      })
      const tempTopPost = sortedPosts[0]
      setTopPost(tempTopPost)
      setOtherPosts(profile.posts?.filter((p)=>p._id !== tempTopPost._id))
    }
  },[profile])

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <img src={errorDino} className="bi  mt-4 mb-3" style={{ "width":"100px", "height":"100px"}}/>
          <h1 className="text-body-emphasis">Oops!</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            You must be logged in to view this page
          </p>
          <div className="d-inline-flex gap-2 mb-5">
            <button className="btn btn-outline-dark btn-lg px-4 rounded-pill" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 0 1z"/>
              </svg>
              Go Back
            </button>
            <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
              Sign Up!
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {!profile?.posts?.length && (
        <h2>
          No Posts Yet
        </h2>
      )}
      {topPost && (
        //display the top post
        <div></div>
      )}
      {otherPosts.map((post,index)=>{
        return (
          // display each post
          <div>

          </div>
        )
      })}

    </div>
  )
};

export default Profile;