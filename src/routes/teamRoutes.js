const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const validateRequest = require('../middlewares/validateRequest');

router.post('/', validateRequest, teamController.createTeam);
router.get('/', teamController.getTeams);

module.exports = router;
