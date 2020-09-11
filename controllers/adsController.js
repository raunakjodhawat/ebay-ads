const { response } = require('express');
const express = require('express');
const advertisementService = require('../services/advertisement');

class AdsController {
    constructor() {
        this.router = express.Router();
        this.router.post('/ads', AdsController.createAd);
        this.router.get('/ads', AdsController.getAd);
        return this.router;
    }

    static async createAd(req, res) {
        const response = await advertisementService.createNewAdvertisement(req.body);
        res.send({response});
    }

    static async getAd(req, res) {

    }
}

module.exports = {
    AdsController
};

