import { Navigate, useParams } from 'react-router-dom';
import { useQuery, } from '@apollo/client';
import { useMutation } from '@apollo/client';


import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import { useState, useEffect } from 'react';

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
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
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
