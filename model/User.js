const mongoose = require("mongoose")
const schema = mongoose.Schema
const user = new schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        Admin: Number,
        Editor: Number,
        User: {
            type: Number,
            required: true,
            default: 1030
        }
    },
    refreshToken: String
})

module.exports = mongoose.model("user", user)