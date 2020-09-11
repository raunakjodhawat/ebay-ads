const db = require('../db');

function createLog(logMeta) {
    db.logs.insertMany({logs: logMeta});
}

module.exports = {
    createLog
}