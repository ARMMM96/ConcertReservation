const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    complaintSubject: {
        type: String,
        required: true,
    },
    details: {
        type: String,
    },
    guardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    complaintCreator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
});

const Complaint = mongoose.model("Complaint", complaintSchema);

module.exports = Complaint;
