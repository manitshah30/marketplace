const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

const connectDB = async () => {
    try {
        await mongoose.connect(mongo_url);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('MongoDB Connection Error: ', err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
