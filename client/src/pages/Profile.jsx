import { Navigate, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_PROFILE, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import errorDino from "../assets/dinoEgg.svg";
import ProfilePostsCont from "../components/ProfilePostsCont";
import EditBio from "../components/Bio/index.jsx";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

const Profile = () => {
  const { profileId } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    { variables: { profileId: profileId } }
  );

  const profile = data?.me || data?.profile;

  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.username) {
    return (
      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <img
            src={errorDino}
            className="bi mt-4 mb-3"
            style={{ width: "100px", height: "100px" }}
          />
          <h1 className="text-body-emphasis">Oops!</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            You must be logged in to view this page
          </p>
          <div className="d-inline-flex gap-2 mb-5">
            <button
              className="btn btn-outline-dark btn-lg px-4 rounded-pill"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 0 1z"
                />
              </svg>
              Go Back
            </button>
            <a href="/signup">
              <button
                className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
                type="button"
              >
                Sign Up!
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        {!profile?.posts?.length && <h2>No Posts Yet</h2>}
        <section className="mb-0">
          <div className="col-sm-8 pr-4 pt-5" id="featured-3">
            <div className="pt-5">
              <div className="feature border border-2 p-4">
                <div className="d-flex align-items-center">
                  <div className="feature-icon rounded-circle d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <svg className="bi rounded" width="2em" height="2em">
                      <use xlinkHref="#collection"></use>
                    </svg>
                  </div>
                  <div className="d-flex ms-3">
                    <h3 className="fs-2 text-body-emphasis">
                      {profile.username}
                    </h3>
                    <Button
                      className="btn btn-sm bg-primary border text-white ms-4 mb-3 py-2 px-3 rounded-pill d-flex align-items-center gap-1 justify-content-start"
                      variant="primary"
                      onClick={handleShow}
                    >
                      Edit Bio
                    </Button>
                  </div>
                </div>

                <p>{profile.bio}</p>
              </div>
            </div>
            <ProfilePostsCont posts={profile.posts} />
          </div>
        </section>
      </div>

      <EditBio show={show} handleClose={handleClose} />
    </>
  );
};

export default Profile;
