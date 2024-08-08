const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const validatePostTeamRequest  = require('../middlewares/validatePostTeamRequest');
const auth = require('../middlewares/auth');

router.get('/', auth, teamController.getTeams);
router.post('/', validatePostTeamRequest, teamController.createTeam);

module.exports = router;
