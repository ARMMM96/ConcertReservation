const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
    reate: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    details: {
        type: String,
    },
    reateCreator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    ratedReference: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

});

const Rate = mongoose.model("Rate", rateSchema);

module.exports = Rate;
