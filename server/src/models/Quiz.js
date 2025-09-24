// src/models/Quiz.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctIndex: Number
});

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [questionSchema],
  passingPercent: { type: Number, default: 70 }
});

module.exports = mongoose.model('Quiz', quizSchema);
