// src/routes/analysisRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getAnalysis } = require('../controllers/analysisController');

router.get('/', auth, getAnalysis);

module.exports = router;
