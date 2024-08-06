const Team = require("../models/teamModel");

exports.createTeam = async (req, res) => {
  try {
    const { teamName, teamLeader, email, contact, collegeName, branch, year, startupIdea, mediumOfReach, teamMembers } = req.body;

    const newTeam = new Team({
      teamName,
      teamLeader,
      email,
      contact,
      collegeName,
      branch,
      year,
      startupIdea,
      mediumOfReach,
      teamMembers,
    });

    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
