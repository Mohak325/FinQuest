// src/models/Banking.js
const mongoose = require('mongoose');

const bankingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['FD', 'RD', 'MutualFund'], required: true },
  amount: { type: Number, required: true },
  startDate: Date,
  tenureMonths: Number,
  interestRate: Number,
  metadata: Object
});

module.exports = mongoose.model('Banking', bankingSchema);
