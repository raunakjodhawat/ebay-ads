// Logger middleware, logs all incoming requests

async function logIncomingRequest(req, res, next) {
    next();
}

module.exports = {
    logIncomingRequest,
};
