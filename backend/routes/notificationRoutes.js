const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

/* GET all notifications for a user */
router.get("/:userId", notificationController.getNotifications);

/* GET notification stats */
router.get("/:userId/stats", notificationController.getNotificationStats);

/* MARK notification as read */
router.put("/:notificationId/read", notificationController.markAsRead);

/* MARK all as read */
router.put("/:userId/read-all", notificationController.markAllAsRead);

module.exports = router;

