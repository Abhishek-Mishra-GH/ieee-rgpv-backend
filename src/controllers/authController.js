const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });

        console.log(admin)
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }


        if (admin.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const payload = {
            admin: {
                id: admin._id
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.status(200).json({ token });
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}