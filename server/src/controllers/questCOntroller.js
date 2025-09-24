// src/controllers/questController.js
const Quest = require('../models/Quest');
const Quiz = require('../models/Quiz');
const User = require('../models/User');
const { gradeQuiz } = require('../utils/quizEngine');

exports.listQuests = async (req, res, next) => {
  try {
    const quests = await Quest.find();
    res.json(quests);
  } catch (err) {
    next(err);
  }
};

exports.getQuest = async (req, res, next) => {
  try {
    const quest = await Quest.findById(req.params.id).populate('quiz');
    res.json(quest);
  } catch (err) {
    next(err);
  }
};

// Submit quiz answers, assign stars if passed
exports.submitQuiz = async (req, res, next) => {
  try {
    const { questId, answers } = req.body;
    const quest = await Quest.findById(questId).populate('quiz');
    if (!quest) return res.status(404).json({ message: 'Quest not found' });

    const result = gradeQuiz(quest.quiz, answers);
    if (result.passed) {
      // award stars, unlock logic (simple)
      await User.findByIdAndUpdate(req.user._id, {
        $inc: { stars: quest.rewardStars },
        $addToSet: { unlockedLevels: quest._id }
      });
    }
    res.json({ result, rewardStars: quest.rewardStars });
  } catch (err) {
    next(err);
  }
};
