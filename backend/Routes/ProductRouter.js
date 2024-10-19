const ensureAuthenticated = require('../Middlewares/Auth');
const express = require('express');
const router = express.Router();

// GET / - Get a list of products (Authenticated route)
router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 20000
        }
    ]);
});

// Catch-all route for unsupported methods on this route
router.all('*', (req, res) => {
    res.status(405).json({ message: 'Method Not Allowed' });
});

module.exports = router;
