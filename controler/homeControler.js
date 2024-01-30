function getHomeInfo(req, res) {
    // res.setHeader("Access-Control-Allow-Origin", "*")
    console.log(req.headers.origin)
    res.json(
        {
            "message": "welcome Home",
            "username": "andrew doghry",
            "type": "customer"
        }
    )
}


module.exports = {
    getHomeInfo
}