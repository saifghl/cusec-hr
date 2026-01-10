const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

// Import routes
const authRoutes = require("./routes/authRoutes");
const candidateRoutes = require("./routes/candidateRoutes");
const jobRoutes = require("./routes/jobRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

// Import database
const pool = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Test route
app.get("/", (req, res) => {
  res.send("✅ CUSEC HR Backend API Running");
});

// Test database connection
pool.getConnection()
  .then((connection) => {
    console.log("✅ Database connected successfully!");
    connection.release();
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
  });

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/candidates", candidateRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Render requires dynamic PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
