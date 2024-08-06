const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    teamName: String,
    teamLeader: String,
    email: String,
    contact: String,
    collegeName: String,
    branch: String,
    year: String,
    startupIdea: String,
    mediumOfReach: String,
    teamMembers: [String]
});

module.exports = mongoose.model('Team', teamSchema);