const db = require('../db');

async function createLog(logMeta) {
    console.log(logMeta);
    await db.logs.insertMany({logs: logMeta});
}

module.exports = {
    createLog
}