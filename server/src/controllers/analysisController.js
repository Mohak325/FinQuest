// src/controllers/analysisController.js
const { generateAnalysisReport } = require('../utils/apiHelpers');
const User = require('../models/User');

exports.getAnalysis = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    const report = await generateAnalysisReport({ userId: user._id, stars: user.stars, balance: user.virtualBalance });
    res.json({ report });
  } catch (err) {
    next(err);
  }
};
