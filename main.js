const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const errorHandler = require("./middleWares/errorHandler")
const notFound = require("./middleWares/notFound")
const path = require("path")
const Logger = require("./middleWares/loggerMiddleware")
app.use(Logger)
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(cors(corsOptions))
app.use(require("./routes/home"))
app.all('*', notFound)
app.use(errorHandler)
app.use("/test", (req, res) => {
})
app.listen(process.env.PORT, () => {
    console.log("listening to port :", process.env.PORT)
})