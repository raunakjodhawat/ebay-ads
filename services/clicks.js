const db = require('../db');

async function setAdClick(_addId) {
    return await db.clicks.insertMany({_addId});
}

module.exports = {
    setAdClick
};
