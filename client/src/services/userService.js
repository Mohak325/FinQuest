// client/src/services/userService.js
import axios from 'axios';

const API_URL = '/api/users/';

// Get user profile data
const getUserProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + 'profile', config);
  return response.data;
};

const userService = {
  getUserProfile,
};

export default userService;