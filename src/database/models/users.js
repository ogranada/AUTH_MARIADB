const mongoose = require('mongoose');

function createModel() {
    const userSchema = new mongoose.Schema({
        username: { type: String, required: true },
        password: { type: String, required: true }
    });
    const User = mongoose.model('Users', userSchema);
    return User;
}

module.exports = {
    createModel
}
