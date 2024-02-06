const jwt = require("jsonwebtoken")
const user = require("../model/User")
const bcrypt = require("bcrypt")
// const { CONFLICT } = require("http-status-codes")
async function createNewUser(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const roles = req.body.roles;
    if (!username || !password || !roles) return res.sendStatus(400)


    const duplicate = await user.findOne({ "username": req.body?.username }).exec()

    if (duplicate) return res.sendStatus(409)//bad request
    const hashedPW = await bcrypt.hash(req.body.password, 10)
    let userObj = {
        "username": req.body.username,
        "password": hashedPW,
        "roles": { "User": 1030 }
    }
    const accessToken = jwt.sign(
        {
            "userInfo": {
                "username": userObj.username,
                "roles": userObj.roles
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "60s" }
    )
    const refreshToken = jwt.sign(
        {
            "userInfo": {
                "username": userObj.username,
                "roles": userObj.roles
            }
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "60m" }
    )
    res.cookie("JWT", accessToken, { httpOnly: true, sameSite: "none", secure: true })

    userObj.refreshToken = refreshToken
    jwt.decode()
    user.create(userObj)
    res.json(
        { "access_Token": accessToken }
    )
}
module.exports = {
    createNewUser
}