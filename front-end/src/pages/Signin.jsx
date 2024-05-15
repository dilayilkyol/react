// src/pages/SignIn.js veya src/components/SignIn.js

import React, { useState } from "react";
import axios from 'axios';
import './signin.css'
<<<<<<< HEAD:src/pages/Signin.jsx
import { useNavigate  } from 'react-router-dom';
=======
>>>>>>> fb7d49178a641a10363098e612b6816eb3b94c61:front-end/src/pages/Signin.jsx

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD:src/pages/Signin.jsx

  let navigate = useNavigate();
=======
>>>>>>> fb7d49178a641a10363098e612b6816eb3b94c61:front-end/src/pages/Signin.jsx

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleChangeUsername = (e) => {
    console.log(e);
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/signup', {
        username,
        email,
        password
      });
      console.log(response.data);
<<<<<<< HEAD:src/pages/Signin.jsx
      navigate('/');
=======
>>>>>>> fb7d49178a641a10363098e612b6816eb3b94c61:front-end/src/pages/Signin.jsx
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/signin', {
        email,
        password
      });
      console.log(response.data);
<<<<<<< HEAD:src/pages/Signin.jsx
      navigate('/');
=======
>>>>>>> fb7d49178a641a10363098e612b6816eb3b94c61:front-end/src/pages/Signin.jsx
    } catch (error) {
      console.error(error);
    }
  };
<<<<<<< HEAD:src/pages/Signin.jsx
console.log('isSignUp', isSignUp)
=======

>>>>>>> fb7d49178a641a10363098e612b6816eb3b94c61:front-end/src/pages/Signin.jsx
  return (
    <div className="wrapper">
      <div className="form-box login">
        <form action="">
          <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
          {isSignUp && (
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleChangeUsername}
                required
              />
            </div>
          )}
          <div className="input-box">
            <input type="text" placeholder="Email" value={email} onChange={handleChangeEmail} required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" value={password} onChange={handleChangePassword} required />
          </div>

          {!isSignUp && (
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/">Forgot password</a>
            </div>
          )}

          <button type="submit" className="btn" onClick={isSignUp ? handleSignUp : handleSignIn}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>

          <div className="signup-link">
            <span>
              {isSignUp
                ? "Already have an account? "
                : "Don't have any account? "}
              <span
                className="signup-link"
                onClick={isSignUp ? handleSignInClick : handleSignUpClick}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </span>{" "}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
