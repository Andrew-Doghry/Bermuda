const { format } = require("date-fns")
const path = require("path")
const fs = require("fs")
const fsPromises = require("fs/promises")

const logItems = async (message, fileName) => {
    const item = `${format(new Date(), "yyyy/MM/dd  hh:mm:ss")}\t${message}`
    console.log(item)
    const thePath = path.join(__dirname, '../logs', fileName)
    try {
        if (!fs.existsSync(path.join(__dirname, "../logs"))) {
            await fsPromises.mkdir(path.join(__dirname, "../logs"));
        }
        if (!fs.existsSync(thePath)) {
            await fsPromises.writeFile(thePath, item + "\n", { encoding: 'utf-8' })
        } else {

            await fsPromises.appendFile(thePath, item + "\n", { encoding: "utf-8" })
        }
    } catch (err) {
        throw new Error(err.message)
    }
}


module.exports = logItems