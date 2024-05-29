function errorHandler(err, req, res, next) {
    console.log(err)
    let message = "Internal Server Error"
    let status = 500
    switch (err.name) {
        case "FAILEDLOGIN":
            message = "Invalid password/email"
            status = 401
            break;
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            message = err.errors[0].message
            status = 400
            break;
        case "BADREQUEST":
            message = err.message
            status = 400
            break;
        case "INVALIDTOKEN":
        case "JsonWebTokenError":
            message = "Unauthorized"
            status = 403
            break;
        case "NOTFOUND":
            message = "Data not found"
            status = 404
            break;
    }
    res.status(status).json({ message })
}

module.exports = errorHandler