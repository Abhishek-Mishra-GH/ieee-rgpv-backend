const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const validateRequest = require('../middlewares/validateRequest');

router.post('/', validateRequest, studentController.createStudent);
router.get('/', studentController.getStudents);

module.exports = router;
