const mongoose = require('mongoose');
const connectionString = "mongodb://localhost:27017/ebay_ads";
const advertisementSchema = require('../schemas/ebayAds/advertisement');
const impressionsSchema = require('../schemas/ebayAds/impressions');
mongoose.set('useNewUrlParser', true);
const ebayAdsCollection = mongoose.createConnection(connectionString);
const advertisements = ebayAdsCollection.model('Advertisements', advertisementSchema);
const impressions = ebayAdsCollection.model('Impressions', impressionsSchema);

module.exports = {
    advertisements,
    impressions
}
