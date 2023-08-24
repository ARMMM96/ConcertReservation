const mongoose = require('mongoose');
const User = require('./user');

const guestSchema = mongoose.Schema({
    // Inherit properties from User model
    firstName: User.schema.paths.firstName,
    lastName: User.schema.paths.lastName,
    email: User.schema.paths.email,
    disability: User.schema.paths.disability,
    disabilityDetails: User.schema.paths.disabilityDetails,
    image: User.schema.paths.image,
    password: User.schema.paths.password,
    phoneNumber: User.schema.paths.phoneNumber,
    role: User.schema.paths.role,

    reservations: [

    ],
    attitude: [

    ],



});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;