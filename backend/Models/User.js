const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Remove whitespace
        lowercase: true, // Store email in lowercase
        validate: {
            validator: function(v) {
                // Simple regex for email validation
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true }); // Add timestamps

// Pre-save middleware to hash password
UserSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        try {
            this.password = await bcrypt.hash(this.password, 10);
        } catch (error) {
            return next(error); // Pass error to the next middleware
        }
    }
    next();
});


// Method to compare password
UserSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
