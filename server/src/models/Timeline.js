// src/models/Timeline.js
const mongoose = require('mongoose');

const timelineSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  activityType: String,
  details: Object,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Timeline', timelineSchema);
