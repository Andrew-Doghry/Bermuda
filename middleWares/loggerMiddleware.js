const logItems = require("../controler/logItems");

const Logger = (req, res, next) => {
    const message = `${req.method}\t${req.path}\t${req.headers.origin}`
    logItems(message, "reqLogs.log")

    next();
}
module.exports = Logger