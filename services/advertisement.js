const db = require('../db');

async function createNewAdvertisement(adMeta) {
    try {
        const response = await db.advertisements.insertMany(adMeta);
        if(response) {
            return response;
        }
    } catch (error) {
        throw error;
    }
    return undefined;
}

module.exports = {
    createNewAdvertisement
}