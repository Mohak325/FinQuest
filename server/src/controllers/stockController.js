// server/src/controllers/stockController.js

const axios = require('axios');

// Get a single stock quote
const getStockQuote = async (req, res) => {
  try {
    const { ticker } = req.params;
    const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${apiKey}`;

    const response = await axios.get(url);

    console.log("Response from Alpha Vantage:", response.data);

    // Check for API errors or if no data was returned
    if (response.data['Error Message'] || !response.data['Global Quote']) {
      return res.status(404).json({ message: 'Data not found for this ticker.' });
    }

    res.status(200).json(response.data['Global Quote']);

  } catch (error) {
    console.error('Alpha Vantage API Error:', error.message);
    res.status(500).json({ message: 'Failed to fetch stock data from Alpha Vantage.' });
  }
};

module.exports = {
  getStockQuote,
};