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
    teamMembers: z.array(z.string().min(1))
});

// Middleware for validation
const validateTeam = (req, res, next) => {
    const { username, password } = req.body;

    if (req.path === '/login' && req.method === 'POST' && (!username || !password)) {
        return res.status(400).json({ error: 'username and password are required' });
    } 
    
    if(!(req.path === '/login')) {
        try {
            teamSchemaZod.parse(req.body);
            next(); // Proceed to the next middleware/route handler
        } catch (e) {
            res.status(400).json({ error: e.errors });
        }
    }

    next();

};

module.exports = validateTeam;