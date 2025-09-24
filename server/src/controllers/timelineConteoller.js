// src/controllers/timelineController.js
const Timeline = require('../models/Timeline');

exports.createEvent = async (req, res, next) => {
  try {
    const event = await Timeline.create({ ...req.body, user: req.user._id });
    res.status(201).json(event);
  } catch (err) {
    next(err);
  }
};

exports.getTimeline = async (req, res, next) => {
  try {
    const items = await Timeline.find({ user: req.user._id }).sort({ date: -1 });
    res.json(items);
  } catch (err) {
    next(err);
  }
};
