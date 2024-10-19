// /backend/server.js

const express = require('express'); // Import express
const mongoose = require('mongoose'); // Import mongoose
const bodyParser = require('body-parser'); // Import body-parser
const cors = require('cors'); // Import cors
const authRoutes = require('./Routes/AuthRouter'); // Import your auth routes

const app = express(); // Create an instance of express
const PORT = process.env.PORT || 5000; // Set port number

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/auth-db', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected...'); // Log when connected
})
.catch(err => console.log(err)); // Log error if connection fails

// Use authentication routes
app.use('/api/auth', authRoutes); // Mount the auth routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`); // Log when server starts
});
