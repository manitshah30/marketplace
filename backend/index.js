const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet'); // Importing helmet for security
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(helmet()); // Security-related headers
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Health check route
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

// 404 Handler for unknown routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack); // Log error for debugging
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
