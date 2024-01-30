const ALlowedOrigins = require("./allowedOrigins")

const corsOptions = {
    origin: (origin, callback) => {
        if (ALlowedOrigins.indexOf(origin) !== -1) {
            callback(null, true)
            return;
        }
        callback(new Error("origin not allowed "), false)
    },
    optionsSuccessStatus: 200
}
module.exports = corsOptions