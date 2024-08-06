const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const validateRequest = require('../middlewares/validateRequest');

router.post('/login', validateRequest, authController.login);

module.exports = router;