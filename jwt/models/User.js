const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    place: { type: String, required: true },
    number: { type: Number, required: true },
});
module.exports = mongoose.model("User", userSchema);
