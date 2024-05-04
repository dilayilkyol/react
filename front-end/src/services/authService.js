// src/services/authService.js

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signIn = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
