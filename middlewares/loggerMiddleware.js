import Logs from '../services/logs/log';

// Logger middleware, logs all incoming requests
class LoggerMiddleWare {
    static async logIncomingRequest(req, res, next) {
        const logData = {
            url: req.url,
            body: req.body,
        };
        try {
            await Logs.addToLogs(logData);
        } catch (err) {
            console.error(err);
        } finally {
            next();
        }
    }
}

export default {
    LoggerMiddleWare,
};
