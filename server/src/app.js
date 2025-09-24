// src/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const bankingRoutes = require('./routes/bankingRoutes');
const investmentRoutes = require('./routes/investmentRoutes');
const questRoutes = require('./routes/questRoutes');
const forumRoutes = require('./routes/forumRoutes');
const analysisRoutes = require('./routes/analysisRoutes');
const timelineRoutes = require('./routes/timelineRoutes');

const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/banking', bankingRoutes);
app.use('/api/investment', investmentRoutes);
app.use('/api/quests', questRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/analysis', analysisRoutes);
app.use('/api/timeline', timelineRoutes);

// health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// error handler
app.use(errorHandler);

module.exports = app;
