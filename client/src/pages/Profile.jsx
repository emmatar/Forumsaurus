import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { useState, useEffect } from 'react';
import errorDino from '../assets/dinoEgg.svg';
import Posts from '../components/ProfileLists/Posts';

const Profile = () => {
  const { profileId } = useParams();
  const [topPost, setTopPost] = useState();
  const [otherPosts, setOtherPosts] = useState([]);

  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  const profile = data?.me || data?.profile;

  useEffect(() => {
    if (profile?.posts?.length) {
      const sortedPosts = profile.posts.sort((a, b) => b.rawrs - a.rawrs); // Correct sorting logic
      const tempTopPost = sortedPosts[0];
      setTopPost(tempTopPost);
      setOtherPosts(profile.posts?.filter((p) => p._id !== tempTopPost._id));
    }
  }, [profile]);

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
          <img src={errorDino} className="bi mt-4 mb-3" style={{ width: '100px', height: '100px' }} />
          <h1 className="text-body-emphasis">Oops!</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            You must be logged in to view this page
          </p>
          <div className="d-inline-flex gap-2 mb-5">
            <button className="btn btn-outline-dark btn-lg px-4 rounded-pill" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 0 1z" />
              </svg>
              Go Back
            </button>
            <a href="/signup">
              <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                Sign Up!
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {!profile?.posts?.length && (
        <h2>No Posts Yet</h2>
      )}
      {topPost && (
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{topPost.title}</h5>
            <p className="card-text">{topPost.content}</p>
            <p className="card-text">Likes: {topPost.rawrs}</p>
          </div>
        </div>
      )}
      {otherPosts.map((post, index) => {
        return (
          // Display each post
          <div className="card mb-3" key={index}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
              <p className="card-text">Likes: {post.rawrs}</p>
            </div>
          </div>
        );
      })}
      <Link to="/NewPost">Create a Post</Link>
    </div>
  );
}

export default Profile;