// src/models/Investment.js
const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  instrument: { type: String, enum: ['Stock', 'Bond', 'ETF', 'MutualFund'], required: true },
  symbol: String,
  units: Number,
  investedAmount: Number,
  createdAt: { type: Date, default: Date.now },
  metadata: Object
});

module.exports = mongoose.model('Investment', investmentSchema);
