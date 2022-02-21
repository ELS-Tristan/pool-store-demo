const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    accountType: {
        type: String,
        required: true
    },

    createdByUserId: {
        type: String,
        required: true
    },

    createdDate: {
        type: Date,
        default: Date.now(),
        required: true,
    },

    modifiedByUserId: {
        type: String,
        required: true
    },

    lastModifiedDate: {
        type: Date,
        default: Date.now(),
        required: true,
    },

})

const User = mongoose.model('user', UserSchema)
module.exports = User