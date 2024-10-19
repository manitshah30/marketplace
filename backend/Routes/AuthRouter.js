const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const express = require('express');
const router = express.Router();

// POST /login - Validates login details, then logs the user in
router.post('/login', loginValidation, async (req, res) => {
    try {
        await login(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// POST /signup - Validates signup details, then creates a new user
router.post('/signup', signupValidation, async (req, res) => {
    try {
        await signup(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// Catch-all route for unsupported methods on this route
router.all('*', (req, res) => {
    res.status(405).json({ message: 'Method Not Allowed' });
});

module.exports = router;

