// client/src/services/stockService.js
import axios from 'axios';

// The base URL for your server's API
const API_URL = '/api/stocks/';

const getQuote = async (ticker) => {
  try {
    const response = await axios.get(API_URL + ticker);
    return response.data;
  } catch (error) {
    console.error(`Error fetching quote for ${ticker}:`, error);
    // Return null or a default object so the UI doesn't crash
    return null;
  }
};

export default {
  getQuote,
};