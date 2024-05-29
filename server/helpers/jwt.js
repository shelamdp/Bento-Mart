const jwt = require("jsonwebtoken")
const secret = "kapanlulus"

const signToken = (object) => {
    return jwt.sign(object, secret)
}

const verifyToken = (token) => {
    return jwt.verify(token, secret)
}


module.exports = {signToken, verifyToken}