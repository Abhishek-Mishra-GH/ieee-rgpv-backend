const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const validateRequest = require('../middlewares/validateRequest');
const auth = require('../middlewares/auth');

router.get('/', auth, teamController.getTeams);
router.post('/', validateRequest, teamController.createTeam);

module.exports = router;
