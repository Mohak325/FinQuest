// src/routes/questRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { listQuests, getQuest, submitQuiz } = require('../controllers/questController');

router.get('/', listQuests);
router.get('/:id', getQuest);
router.post('/submit', auth, submitQuiz);

module.exports = router;
