// src/controllers/bankingController.js
const Banking = require('../models/Banking');

exports.createBanking = async (req, res, next) => {
  try {
    const data = { ...req.body, user: req.user._id };
    const rec = await Banking.create(data);
    res.status(201).json(rec);
  } catch (err) {
    next(err);
  }
};

exports.getUserBankings = async (req, res, next) => {
  try {
    const recs = await Banking.find({ user: req.user._id });
    res.json(recs);
  } catch (err) {
    next(err);
  }
};
