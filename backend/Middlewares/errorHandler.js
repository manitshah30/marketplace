const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error for debugging
    res.status(500).json({
        message: "Internal Server Error",
        error: err.message || 'Something went wrong'
    });
};

module.exports = errorHandler;
