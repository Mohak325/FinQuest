import axios from 'axios';

// The URL of your backend server's authentication routes
const API_URL = 'http://localhost:5000/api/auth/';

// Function to handle user registration
const signup = (name, email, password) => {
  return axios.post(API_URL + 'signup', { name, email, password });
};

// Function to handle user login
const login = (email, password) => {
  return axios
    .post(API_URL + 'login', { email, password })
    .then((response) => {
      // If the login is successful and a token is received,
      // store the user data (token and username) in localStorage
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

// Function to log the user out by removing their data from localStorage
const logout = () => {
  localStorage.removeItem('user');
};

// Function to get the current user's data from localStorage
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;