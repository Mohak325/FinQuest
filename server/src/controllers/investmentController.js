// src/controllers/investmentController.js
const Investment = require('../models/Investment');
const { simulatePriceChange } = require('../utils/investmentSim');

exports.createInvestment = async (req, res, next) => {
  try {
    const data = { ...req.body, user: req.user._id };
    const inv = await Investment.create(data);
    res.status(201).json(inv);
  } catch (err) {
    next(err);
  }
};

exports.getInvestments = async (req, res, next) => {
  try {
    const invs = await Investment.find({ user: req.user._id });
    res.json(invs);
  } catch (err) {
    next(err);
  }
};

exports.simulate = async (req, res, next) => {
  try {
    const { amount, days } = req.body;
    const result = simulatePriceChange(amount || 1000, days || 30);
    res.json({ simulatedValue: result });
  } catch (err) {
    next(err);
  }
};
