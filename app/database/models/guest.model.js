const mongoose = require('mongoose');
const User = require('./user');

const guestSchema = mongoose.Schema({
    // Inherit properties from User model
    firstName: User.schema.paths.firstName,
    lastName: User.schema.paths.lastName,
    email: User.schema.paths.email,
    image: User.schema.paths.image,
    password: User.schema.paths.password,
    phoneNumber: User.schema.paths.phoneNumber,
    role: User.schema.paths.role,


    disability: {
        type: Boolean,
        default: false,
        required: true
    },
    disabilityDetails: {
        type: String,
        default: nul,
        required: function () {
            return this.disability;
        },
    },
    reservations: [

    ],
    attitude: [

    ],



});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;