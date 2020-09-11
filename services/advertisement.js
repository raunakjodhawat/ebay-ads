const db = require('../db');
const impressionsService = require('./impressions');
const clickService = require('./clicks');

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

    const _addId = await impressionsService.getAdImpression(sortDirection);
    const randomAdd = await db.advertisements.findOne({_id: _addId});
    await impressionsService.createImpression(_addId, 100234);

    const wasAddClicked = probabilityCount[Math.floor(Math.random() * 5)] === -1; // 20% ads will be clicked
    if(wasAddClicked) {
        console.log("Click is created");
        await clickService.setAdClick(_addId);
    }
    return randomAdd;
}

module.exports = {
    createNewAdvertisement,
    deleteAdvertisement,
    getRandomAdvertisement
}