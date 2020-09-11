const db = require('../db');

async function getAdImpression(sortDirection) {
    const allImpressions = await db.impressions.find();
    if(allImpressions.length === 0) {
        const allAds = await db.advertisements.find().lean();
        // return a random add, if there are no impressions
        return allAds[Math.floor(Math.random() * allAds.length)]._id;
    }

    const sortedImpressions = await db.impressions.aggregate([
        {"$group" : { "_id": "$_adsId", "count": { "$sum": 1 }} },
        {"$sort": {count: sortDirection}},
    ]);
    
    return sortedImpressions[0];
}

async function createImpression(_adsId, userId) {
    return await db.impressions.insertMany({userId, _adsId});
}

module.exports = {
    getAdImpression,
    createImpression
}