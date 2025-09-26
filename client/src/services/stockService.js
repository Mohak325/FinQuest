import axios from 'axios';

const API_URL = '/api/stocks/';

// Gets the basic quote for a single stock
const getQuote = async (ticker) => {
  try {
    const response = await axios.get(API_URL + ticker);
    return response.data;
  } catch (error) {
    console.error(`Error fetching quote for ${ticker}:`, error);
    return null;
  }
};

// --- THIS FUNCTION IS MISSING ---
// Gets historical data for the chart
const getDailyAdjustedData = async (ticker) => {
    try {
        const response = await axios.get(`${API_URL}chart/${ticker}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching chart data for ${ticker}:`, error);
        return null;
    }
};

// --- THIS FUNCTION IS ALSO MISSING ---
// Searches for stock symbols
const searchForSymbols = async (keywords) => {
    if (!keywords) return [];
    try {
        const response = await axios.get(`${API_URL}search/${keywords}`);
        return response.data;
    } catch (error) {
        console.error(`Error searching for symbols:`, error);
        return [];
    }
};

// --- UPDATE THE EXPORTS ---
export default {
    getQuote,
    getDailyAdjustedData,
    searchForSymbols,
};