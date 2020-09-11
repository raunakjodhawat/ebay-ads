const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Impressions = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        index: true
    },
    _adsId: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, {timestamps: true});

module.exports = Impressions;
