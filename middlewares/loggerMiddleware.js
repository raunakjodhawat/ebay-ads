const loggerService = require('../services/logs');

// Logger middleware, logs all incoming requests
async function logIncomingRequest(req, res, next) {
    const logObject = {
        url: req.url,
        params: req.params,
        body: req.body
    };
    loggerService.createLog(logObject);
    next();
}

module.exports = {
    logIncomingRequest,
};
