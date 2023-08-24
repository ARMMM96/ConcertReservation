const mongoose = require('mongoose');
const User = require('./user');

const organizerSchema = mongoose.Schema({
    // Inherit properties from User model
    firstName: User.schema.paths.firstName,
    lastName: User.schema.paths.lastName,
    email: User.schema.paths.email,
    image: User.schema.paths.image,
    password: User.schema.paths.password,
    phoneNumber: User.schema.paths.phoneNumber,
    role: User.schema.paths.role,
    positon: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 20,
        required: false
    }


});

const Organizer = mongoose.model('Organizer', organizerSchema);

module.exports = Organizer;