const yahooFinance = require('yahoo-finance2').default;

// --- 1. Get a single stock quote ---
const getStockQuote = async (req, res) => {
  try {
    const { ticker } = req.params;
    const quote = await yahooFinance.quote(ticker);

    if (!quote || !quote.regularMarketPrice) {
      return res.status(404).json({ message: 'Data not found for this ticker.' });
    }

    // Format the response to match the structure your frontend expects
    const formattedData = {
      '01. symbol': quote.symbol,
      '05. price': quote.regularMarketPrice,
      '09. change': quote.regularMarketChange,
      '10. change percent': `${quote.regularMarketChangePercent.toFixed(2)}%`
    };
    res.status(200).json(formattedData);

  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch stock quote.' });
  }
};

// --- 2. Get historical data for the chart ---
const getDailyAdjusted = async (req, res) => {
  try {
    const { ticker } = req.params;
    const today = new Date();
    const oneYearAgo = new Date(today.setFullYear(today.getFullYear() - 1));
    
    const historicalData = await yahooFinance.historical(ticker, {
        period1: oneYearAgo.toISOString().split('T')[0], // format as 'YYYY-MM-DD'
    });
    
    res.status(200).json(historicalData);

  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch historical data.' });
  }
};

// --- 3. Search for a stock symbol ---
const searchSymbols = async (req, res) => {
  try {
    const { keywords } = req.params;
    const searchResult = await yahooFinance.search(keywords);
    
    res.status(200).json(searchResult.quotes);

  } catch (error) {
    res.status(500).json({ message: 'Failed to perform symbol search.' });
  }
};

module.exports = {
  getStockQuote,
  getDailyAdjusted,
  searchSymbols,
};