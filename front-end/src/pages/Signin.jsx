import React from "react";
import "./signin.css";

export default function SignIn() {
  return (

    <div className="wrapper">
      <div className="form-box login">
      <form action="">
        <h1>Sign In</h1>
        <div className="input-box">
          <input type="text" placeholder="email" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/">Forgot password</a>
        </div>

        <button type="submit" className="btn">
          Sign in
        </button>

        <div className="signup-link">
          <span>
            {" "}
            Don't have any account? <a href="/">Sign Up</a>{" "}
          </span>
        </div>
      </form>
      </div>
    </div>
  );
}