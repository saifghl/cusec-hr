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