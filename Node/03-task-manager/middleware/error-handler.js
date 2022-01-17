const { CustomAPIError } = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg : err.message })
    }
    return res.status(500).json({ msg : "Algo de errado aocnteceu, tente novamente.", error : err })
}

module.exports = errorHandlerMiddleware
