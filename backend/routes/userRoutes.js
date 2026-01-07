const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/* GET profile */
router.get("/:id", userController.getProfile);

/* UPDATE profile */
router.put("/:id", userController.updateProfile);

/* UPDATE password */
router.put("/:id/password", userController.changePassword);

/* UPDATE security */
router.put("/:id/security", userController.updateSecurity);

/* UPDATE preferences */
router.put("/:id/preferences", userController.updatePreferences);

module.exports = router;
