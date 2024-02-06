const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
    } catch (err) {
        throw new Error(err.message)
    }
}

module.exports = connect