const mongoose = require('mongoose');

const Advertisement = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    category: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = Advertisement;
