const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    guestId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }],
    concertId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }],
    qrcode: {
        type: String
    },
    class: {
        type: String,
        enum: ['first', 'middle', 'economy'],
        required: true
    }
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
