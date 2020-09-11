const mongoose = require('mongoose');
const connectionString = "mongodb://localhost:27017/ebay_ads";
mongoose.set('useNewUrlParser', true);
const ebayAdsCollection = mongoose.createConnection(connectionString);

// import Schemas
const advertisementSchema = require('../schemas/ebayAds/advertisement');
const impressionsSchema = require('../schemas/ebayAds/impressions');
const loggerSchema = require('../schemas/ebayAds/Logger');

// create model and send
const advertisements = ebayAdsCollection.model('Advertisements', advertisementSchema);
const impressions = ebayAdsCollection.model('Impressions', impressionsSchema);
const logs = ebayAdsCollection.model('Logs', loggerSchema);

module.exports = {
    advertisements,
    impressions,
    logs
}
