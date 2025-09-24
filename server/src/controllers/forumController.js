// src/controllers/forumController.js
const ForumPost = require('../models/ForumPost');

exports.createPost = async (req, res, next) => {
  try {
    const post = await ForumPost.create({ ...req.body, author: req.user._id });
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

exports.listPosts = async (req, res, next) => {
  try {
    const posts = await ForumPost.find().populate('author', 'name');
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

exports.comment = async (req, res, next) => {
  try {
    const { postId, comment } = req.body;
    const post = await ForumPost.findById(postId);
    post.comments.push({ author: req.user._id, body: comment });
    await post.save();
    res.json(post);
  } catch (err) {
    next(err);
  }
};
