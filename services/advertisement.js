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

async function deleteAdvertisement(deleteId) {
    try {
        return await db.advertisements.deleteOne({_id: db.ObjectId(deleteId)});
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createNewAdvertisement,
    deleteAdvertisement
}