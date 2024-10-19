const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");
const Joi = require('joi'); // Added Joi for validation

// Joi schema for user validation
const userSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required() // Ensuring minimum length for password
});

// Signup function
const signup = async (req, res) => {
    try {
        // Validate incoming request data using Joi schema
        const { error } = userSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message, success: false });
        }

        const { name, email, password } = req.body;

        // Check if the user already exists
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: 'User already exists, please log in.', success: false });
        }

        // Create a new user model and hash the password
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);

        // Save the new user to the database
        await userModel.save();

        res.status(201).json({ message: "Signup successful", success: true });
    } catch (err) {
        // Log the error for debugging purposes
        console.error('Error during signup:', err);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

// Login function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists in the database
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Authentication failed, email or password is incorrect';

        // Return 403 if the user does not exist
        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        // Compare the provided password with the hashed password in the database
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        // Generate a JWT token for the user
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET, // Ensure JWT_SECRET is set in your .env file
            { expiresIn: '24h' } // Token expires in 24 hours
        );

        // Respond with the token and user details
        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (err) {
        // Log the error for debugging purposes
        console.error('Error during login:', err);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

module.exports = {
    signup,
    login
};
