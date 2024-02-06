const logItems = require("../controler/logItems")

function errorHandler(error, req, res, next) {
    console.log("the message : ", error.message)
    logItems(`${req.headers["X-Req-Id"]}\t${req.header.origin}\t${req.path}\t${req.method}\tERROR: ${error.message} `, "reqErrors.log")
    return next()
}
module.exports = errorHandler