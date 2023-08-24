const mongoose = require("mongoose");

const concertSchema = new mongoose.Schema({
    concertName: {
        type: String,
        required: true,
    },
    details: {
        type: String,
    },
    artists: [],
    gards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }],
    organizers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }],
    rates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rate',
    }]
});

const Concert = mongoose.model("Concert", concertSchema);

module.exports = Concert;
