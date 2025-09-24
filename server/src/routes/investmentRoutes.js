// src/routes/investmentRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createInvestment, getInvestments, simulate } = require('../controllers/investmentController');

router.post('/', auth, createInvestment);
router.get('/', auth, getInvestments);
router.post('/simulate', auth, simulate);

module.exports = router;
