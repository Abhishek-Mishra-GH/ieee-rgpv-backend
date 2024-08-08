const { z } = require('zod');

// Define the Zod schema
const teamSchemaZod = z.object({
    teamName: z.string().min(1),
    teamLeader: z.string().min(1),
    email: z.string().email(),
    contact: z.string().min(1),
    collegeName: z.string().min(1),
    branch: z.string().min(1),
    year: z.string().min(1),
    startupIdea: z.string().min(1),
    mediumOfReach: z.string().min(1),
    // max team member is 4
    teamMembers: z.array(z.string(1)).max(4),
});


// Middleware for validation
const validatePostTeamRequest = (req, res, next) => {
    try {
        teamSchemaZod.parse(req.body);
        next(); // Proceed to the next middleware/route handler
    } catch (e) {
        res.status(400).json({ error: e.errors });
    }

};

module.exports = validatePostTeamRequest;