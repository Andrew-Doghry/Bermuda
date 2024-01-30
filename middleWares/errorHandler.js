const logItems = require("../controler/logItems")

function errorHandler(error, req, res, next) {
    console.log("the message : ", error.message)
    logItems(`${req.header.origin}\t${req.path}\t${req.method}\tERROR:${error.message} `, "reqErrors.log")
    next()
}
module.exports = errorHandler