import React, { useState } from "react";
import "./signin.css";

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

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
            <input type="text" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>

          {!isSignUp && (
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/">Forgot password</a>
            </div>
          )}

          <button type="submit" className="btn">
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
