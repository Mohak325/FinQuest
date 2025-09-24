// src/routes/timelineRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createEvent, getTimeline } = require('../controllers/timelineController');

router.post('/', auth, createEvent);
router.get('/', auth, getTimeline);

module.exports = router;
