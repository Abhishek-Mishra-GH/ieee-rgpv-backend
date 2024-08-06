const { z } = require('zod');

// Define the Zod schema
const teamSchemaZod = z.object({
    teamName: z.string().nonempty(),
    teamLeader: z.string().nonempty(),
    email: z.string().email(),
    contact: z.string().nonempty(),
    collegeName: z.string().nonempty(),
    branch: z.string().nonempty(),
    year: z.string().nonempty(),
    startupIdea: z.string().nonempty(),
    mediumOfReach: z.string().nonempty(),
    teamMembers: z.array(z.string().nonempty())
});

// Middleware for validation
const validateTeam = (req, res, next) => {
    try {
        teamSchemaZod.parse(req.body);
        next(); // Proceed to the next middleware/route handler
    } catch (e) {
        res.status(400).json({ error: e.errors });
    }
};

module.exports = validateTeam;