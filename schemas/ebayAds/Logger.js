const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Logs = new mongoose.Schema({
    logs: {
        type: Schema.Types.Mixed,
        required: true
    }
}, {timestamps: true});

module.exports = Logs;
