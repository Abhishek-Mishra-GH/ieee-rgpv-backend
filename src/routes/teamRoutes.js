const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const validateRequest = require('../middlewares/validateRequest');
const auth = require('../middlewares/auth');

router.post('/', validateRequest, auth, teamController.createTeam);
router.get('/', auth, teamController.getTeams);

module.exports = router;

