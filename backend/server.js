<<<<<<< HEAD
=======
// backend/server.js
>>>>>>> c66cf8cff78d2b033112bc992bac8706bb0fc174
const express = require("express");
const cors = require("cors");
require("dotenv").config();

<<<<<<< HEAD
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
=======
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const queryRoutes = require("./routes/queryRoutes"); // ✅ ADD THIS
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
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
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
>>>>>>> c66cf8cff78d2b033112bc992bac8706bb0fc174
