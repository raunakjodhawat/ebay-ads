const db = require('../db');

async function createNewAdvertisement(adMeta) {
    const response = await db.advertisements.insertMany(adMeta);
    if(response) {
        return response;
    }
    return undefined;
}

module.exports = {
    createNewAdvertisement
}