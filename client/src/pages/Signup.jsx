import { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main> 
      <div className="container">
        <div className="container col-md-6 shadow flex-col align-items-center justify-content-center border border-3 border-primary rounded pb-4 mb-4">
          <div className="container col-lg-8 mt-4 text-center">
            <h4 className="mb-3 fw-bold bg-primary shadow text-light rounded-pill p-3">Sign Up</h4>
          </div>
          <div className="container col-lg-8 my-4">
            {data ? (
              <p>
                Success! You may now return{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="container-fluid">
                  <div className="form-item mb-3 py-1">
                    <label htmlFor='username' className='col-auto form-label'>
                      Email
                    </label>
                    <input
                      className="form-input col-auto border-primary border-2 form-control"
                      placeholder="Your username"
                      name="username"
                      type="text"
                      value={formState.username}
                      onChange={handleChange}
                    />
                  </div>
                <div className="form-item mb-3 py-1">
                    <label htmlFor='userEmail' className='col-auto form-label'>
                      Email
                    </label>
                    <input
                      className="form-input col-auto border-primary border-2 form-control"
                      placeholder="name@example.com"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-item mb-3 py-1">
                    <label htmlFor='userPassword' className='col-auto form-label'>
                      Password
                    </label>
                    <input
                      className="form-input form-control border-primary border-2"
                      placeholder="password123"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="container-fluid text-center">
                    <button
                      className="form-btn btn btn-md rounded-pill fw-medium text-light btn-warning"
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
