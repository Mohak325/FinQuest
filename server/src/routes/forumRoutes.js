// src/routes/forumRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createPost, listPosts, comment } = require('../controllers/forumController');

router.get('/', listPosts);
router.post('/', auth, createPost);
router.post('/comment', auth, comment);

module.exports = router;
