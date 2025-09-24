// server/src/routes/stockRoutes.js

const express = require('express');
const router = express.Router();
const { getStockQuote } = require('../controllers/stockController');

// Define the route to get a stock quote by its ticker
// Example: GET /api/stocks/IBM
router.get('/:ticker', getStockQuote);

module.exports = router;