<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

// Import routes
const authRoutes = require('./routes/authRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Import database
const pool = require('./config/db');
=======
// backend/server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const queryRoutes = require("./routes/queryRoutes"); // ✅ ADD THIS
const notificationRoutes = require("./routes/notificationRoutes");
>>>>>>> ab1ca82485e1b8ef397328128ced844cc70c2f76

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
<<<<<<< HEAD
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

=======
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/queries", queryRoutes); // ✅ REQUIRED FOR HR QUERIES
app.use("/api/notifications", notificationRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("CUSEC HR Backend Running ✅");
});

const PORT = process.env.PORT || 5000;
>>>>>>> ab1ca82485e1b8ef397328128ced844cc70c2f76
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
