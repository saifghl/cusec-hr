const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

// Import routes
const authRoutes = require('./routes/authRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Import database
const pool = require('./config/db');

// backend/server.js

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const jobRoutes = require("./routes/jobRoutes");


const app = express();
app.use(cors());
app.use(express.json());

// TODO: Add authentication middleware (e.g., JWT) for protected routes
app.use("/api", jobRoutes);
app.use("/api/dashboard", require("./routes/dashboardRoutes"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Test database connection
pool.getConnection()
  .then(connection => {
    console.log('Database connected successfully!');
    connection.release();
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
