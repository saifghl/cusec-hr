// backend/routes/queryRoutes.js
const express = require("express");
const router = express.Router();

const {
  getAllQueries,
  createQuery,
  getQueryById,
  getQueryMessages,
  sendReply,
  updateQueryStatus,
  addQueryNote,
  getQueryNotes,
  assignQuery,
  uploadAttachment,
  getQueryActivity,
  uploadMiddleware,
} = require("../controllers/queryController");

// HR Queries
router.get("/", getAllQueries);
router.post("/", uploadMiddleware, createQuery);
router.get("/:id", getQueryById);
router.get("/:id/messages", getQueryMessages);
router.post("/:id/reply", sendReply);
router.put("/:id/status", updateQueryStatus);
router.post("/:id/notes", addQueryNote);
router.get("/:id/notes", getQueryNotes);
router.put("/:id/assign", assignQuery);
router.post("/:id/attachments", uploadMiddleware, uploadAttachment);
router.get("/:id/activity", getQueryActivity);

module.exports = router;
