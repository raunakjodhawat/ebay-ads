const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Clicks = new mongoose.Schema({
    _addId: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, {timestamps: true});

module.exports = Clicks;
