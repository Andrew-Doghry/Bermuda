const logItems = require("../controler/logItems");
const { v4 } = require("uuid")
const Logger = (req, res, next) => {
    const id = v4()
    const message = `${id}\t${req.method}\t${req.path}\t${req.headers.origin}`
    logItems(message, "reqLogs.log")
    req.headers["X-Req-Id"] = id;
    next();
}
module.exports = Logger