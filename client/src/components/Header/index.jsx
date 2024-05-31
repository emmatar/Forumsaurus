import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import dinoHeader from '../../assets/dinoHeader.svg';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="shadow-lg bg-primary text-light mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-light" to="/">
          <h1 className="fw-bold m-0" style={{ textDecoration: 'none', fontSize: '3rem' }}>
            FORUMSAURUS
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          The Forum for Dino Lovers
        </p>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary border border-2 border-light fw-medium text-light m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-primary border border-2 border-light fw-medium text-light m-2" to="/signup">
                Signup
              </Link>
              <Link className="btn btn-lg btn-warning border border-2 border-warning fw-bold fw-medium text-light m-2" to="/profileTemp">
                TEST
              </Link>
              {/* Add the Link to NewPost component */}
              <Link className="btn btn-lg btn-primary border border-2 border-light fw-medium text-light m-2" to="/newpost">
                Create A Post
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
            <img src={dinoHeader} className="bi me-2" width="40" height="32" />
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
