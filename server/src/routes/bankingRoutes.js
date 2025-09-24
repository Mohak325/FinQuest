// src/routes/bankingRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createBanking, getUserBankings } = require('../controllers/bankingController');

router.post('/', auth, createBanking);
router.get('/', auth, getUserBankings);

module.exports = router;
