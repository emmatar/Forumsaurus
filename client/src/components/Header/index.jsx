import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import dinoHeader from '../../assets/dinoHeader.svg';
import { Button } from 'react-bootstrap';

const Header = () => {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};

	return (
		<header className='bg-primary shadow-lg'>
			<div className='container border border-primary d-flex flex-warp align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
				<div className='col-md-3 mb-2 mb-md-0'>
					<a
						to='/'
						className='text-light d-inline-flex link-body-emphasis text-decoration-none'>
						<img
							src={dinoHeader}
							width='32'
							height='32'
						/>
						<div className='d-inline-flex align-items-center fs-5 fw-bold mx-1'>
							FORUMSAURUS
						</div>
					</a>
				</div>
				<ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
					<li>
						<Link
							to='/'
							className='nav-link px-2 link-light'>
							Home
						</Link>
					</li>
            {Auth.loggedIn() && (
              <>
              <li>
                <Link
                  to='/me'
                  className='nav-link px-2 link-light'>
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to='/NewPost'
                  className='nav-link px-2 link-light'>
                  Create Post
                </Link>
              </li>
              </>
            )}
				</ul>
				<div className='col-md-3 text-end'>
					{Auth.loggedIn() ? (
            <>
              <Button
                type='button'
                className='btn btn-outline-primary text-light me-2'
                onClick={logout}
              >
                Logout
              </Button>
						</>
					) : (
						<>
              <Button
                type='button'
                className='btn btn-outline-primary me-2'
                onClick={() => (window.location.href = '/login')}
              >
                Login
              </Button>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;

