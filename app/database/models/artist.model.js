const mongoose = require('mongoose');
const User = require('./user');

const artistSchema = mongoose.Schema({
    // Inherit properties from User model
    firstName: User.schema.paths.firstName,
    lastName: User.schema.paths.lastName,
    email: User.schema.paths.email,
    image: User.schema.paths.image,
    password: User.schema.paths.password,
    phoneNumber: User.schema.paths.phoneNumber,
    role: User.schema.paths.role,

    reates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rates',
    }],
    concerts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Concert',
    }],

    albums: [{

    }]

});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;