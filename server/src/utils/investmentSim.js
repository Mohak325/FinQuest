// src/utils/investmentSim.js
// Simple simulation utilities for virtual investments.
// NOTE: replace with real market calls in future.

const simulatePriceChange = (amount, days = 30) => {
  // simulate a simple percent change over `days`
  const dailyReturn = (Math.random() - 0.5) * 0.02; // -1%..+1% approx
  let value = amount;
  for (let i = 0; i < days; i++) {
    value = value * (1 + dailyReturn);
  }
  return Number(value.toFixed(2));
};

module.exports = { simulatePriceChange };
