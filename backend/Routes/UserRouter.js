const express = require('express');
const ensureAuthenticated = require('../Middlewares/Auth');
const UserModel = require('../Models/User');

const router = express.Router();

// Example route to get user details
router.get('/profile', ensureAuthenticated, async (req, res) => {
    try {
        const user = await UserModel.findById(req.user._id).select('-password'); // Exclude password from response
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
