const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },

    passWord: {
        type: String,
        required: true,
        trim: true
    },

    userEmail: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }

});

module.exports = mongoose.model('User', UserSchema);