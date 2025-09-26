const express = require('express');
const router = express.Router();
const { getStockQuote, getDailyAdjusted, searchSymbols } = require('../controllers/stockController');

// Route for single stock quote
// Example: GET /api/stocks/IBM
router.get('/:ticker', getStockQuote);

// Route for Historical Chart Data
// Example: GET /api/stocks/chart/IBM
router.get('/chart/:ticker', getDailyAdjusted);

// Route for Symbol Search
// Example: GET /api/stocks/search/BA
router.get('/search/:keywords', searchSymbols);

module.exports = router;