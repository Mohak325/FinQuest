// src/models/Quest.js
const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
  title: { type: String, required: true },
  section: { type: String, enum: ['banking', 'investment'], required: true },
  contentType: { type: String, enum: ['article', 'video'], default: 'article' },
  content: { type: String }, // could be HTML, markdown, or URL
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
  rewardStars: { type: Number, default: 1 },
  unlockedAfter: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quest' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quest', questSchema);
