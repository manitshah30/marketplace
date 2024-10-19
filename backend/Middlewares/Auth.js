const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    // Ensure the Authorization header is present
    if (!authHeader) {
        return res.status(403)
            .json({ message: 'Unauthorized: JWT token is required' });
    }
    
    // Extract JWT token from the "Bearer <token>" format
    const token = authHeader.split(' ')[1];
    
    // Ensure the token is present
    if (!token) {
        return res.status(403)
            .json({ message: 'Unauthorized: Token format is invalid' });
    }

    try {
        // Verify JWT token using the secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Add decoded token data to request object
        next();
    } catch (err) {
        return res.status(403)
            .json({ message: 'Unauthorized: JWT token is invalid or expired' });
    }
}

module.exports = ensureAuthenticated;
