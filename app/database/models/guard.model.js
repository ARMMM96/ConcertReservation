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
    concerts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Concert',
    }],


    rates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rate',
    }],
    complaints: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Complaint',
    }]


});

const Organizer = mongoose.model('Organizer', organizerSchema);

module.exports = Organizer;