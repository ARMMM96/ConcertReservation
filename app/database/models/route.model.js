const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
    url: { type: String, unique: true, required: true, trim: true },
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
});


routeSchema.virtual('roleTitles', {
    ref: 'Role',
    localField: 'roles',
    foreignField: '_id',
    justOne: false
});


const Route = mongoose.model("Route", routeSchema);

module.exports = Route;
ص