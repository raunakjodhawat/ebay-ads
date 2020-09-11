const db = require('../db');
const impressionsService = require('./impressions');

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

async function getRandomAdvertisement() {
    const probabilityCount = [1, 1, 1, 1, -1]; // 4: 1 => 80:20
    // we will choose 80% of the time, most viewed ads, and 20% least viewed ads
    const sortDirection = probabilityCount[Math.floor(Math.random() * 5)];

    const randomlyChoosenAdId = await impressionsService.getAdImpression(sortDirection);
    const randomAdd = await db.advertisements.findOne({_id: randomlyChoosenAdId});
    await impressionsService.createImpression(randomlyChoosenAdId, 100234);

    return randomAdd;
}

module.exports = {
    createNewAdvertisement,
    deleteAdvertisement,
    getRandomAdvertisement
}