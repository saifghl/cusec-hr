const express = require('express');
<<<<<<< HEAD
const { login, register } = require('../controllers/authController');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
=======
const { login,register } = require('../controllers/authController');

const router = express.Router();


router.post('/login', login);
router.post("/register",register);
>>>>>>> c66cf8cff78d2b033112bc992bac8706bb0fc174

module.exports = router;