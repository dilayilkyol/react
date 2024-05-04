// src/pages/authentication/Authentication.js

import React, { useState } from 'react';
import { signUp, signIn } from '../services/authService'; // AuthService dosyasını import edin

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signUp(formData); // Kayıt işlemi
        console.log('Sign up successful');
      } else {
        await signIn(formData); // Giriş işlemi
        console.log('Sign in successful');
      }
    } catch (error) {
      console.error(error); // Hata durumunda
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        )}
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <div>
        {isSignUp ? (
          <p>Already have an account? <span onClick={() => setIsSignUp(false)}>Sign In</span></p>
        ) : (
          <p>Don't have an account? <span onClick={() => setIsSignUp(true)}>Sign Up</span></p>
        )}
      </div>
    </div>
  );
};

export default Authentication;
