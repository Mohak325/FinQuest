// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  stars: { type: Number, default: 0 },
  virtualBalance: { type: Number, default: 10000 }, // starting virtual money
  unlockedLevels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quest' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
