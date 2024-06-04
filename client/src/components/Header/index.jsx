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

	<header class='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
		<div class='col-md-3 mb-2 mb-md-0'>
			<a
				href='/'
				class='d-inline-flex link-body-emphasis text-decoration-none'>
				<svg
					class='bi'
					width='40'
					height='32'
					role='img'
					aria-label='Bootstrap'>
					<use xlink:href='#bootstrap'></use>
				</svg>
			</a>
		</div>

		<ul class='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
			<li>
				<a
					href='#'
					class='nav-link px-2 link-secondary'>
					Home
				</a>
			</li>
			<li>
				<a
					href='#'
					class='nav-link px-2'>
					Features
				</a>
			</li>
			<li>
				<a
					href='#'
					class='nav-link px-2'>
					Pricing
				</a>
			</li>
			<li>
				<a
					href='#'
					class='nav-link px-2'>
					FAQs
				</a>
			</li>
			<li>
				<a
					href='#'
					class='nav-link px-2'>
					About
				</a>
			</li>
		</ul>

		<div class='col-md-3 text-end'>
			<button
				type='button'
				class='btn btn-outline-primary me-2'>
				Login
			</button>
			<button
				type='button'
				class='btn btn-primary'>
				Sign-up
			</button>
		</div>
	</header>;

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
					{/*           <p
            className='m-0'
            style={{ fontSize: '1.75rem', fontWeight: '700' }}>
            The Forum for Dino Lovers
          </p> */}
				</div>
				<ul class='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
					<li>
						<Link
							to='/'
							class='nav-link px-2 link-light'>
							Home
						</Link>
					</li>
            {Auth.loggedIn() ? (
              <>
              <li>
                <Link
                  to='/me'
                  class='nav-link px-2 link-light'>
                  Profile
                </Link>
                </li>
              <li>
                <Link
                  to='/NewPost'
                  class='nav-link px-2 link-light'>
                  Create Post
                </Link>
              </li>
              </>
            ) : null}
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
                onClick='/login'
                >
                  <Link
                    to='/login'
                    className='nav-link px-2 link-light'
                  >
                    Login
                  </Link>
                </Button>
							{/* Add the Link to NewPost component */}
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
