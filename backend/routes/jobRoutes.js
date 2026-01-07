const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

// HR / Admin
router.post("/jobs", jobController.createJob);
router.put("/jobs/:id", jobController.updateJob);
router.delete("/jobs/:id", jobController.deleteJob);
router.patch("/jobs/:id/status", jobController.changeJobStatus);

// Public
router.get("/jobs", jobController.getAllJobs);
router.get("/jobs/:id", jobController.getJobById);

module.exports = router;