module.exports = (req, res, next) => {
    const { name, email, mobile, branch, collegeName } = req.body;
    if (!name || !email || !mobile || !branch || !collegeName) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    next();
  };
  