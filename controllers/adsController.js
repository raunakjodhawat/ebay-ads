const { response } = require('express');
const express = require('express');
const advertisementService = require('../services/advertisement');

class AdsController {
    constructor() {
        this.router = express.Router();
        this.router.post('/ads', AdsController.createAd);
        this.router.delete('/ads/:id', AdsController.deleteAd);
        this.router.get('/ads', AdsController.getAd);
        return this.router;
    }

    static async createAd(req, res) {
        try {
            // TODO: Add middleware to process incoming post advertisement request
            const response = await advertisementService.createNewAdvertisement(req.body);
            if(response) {
                res.send({response});
            }
        } catch (error) {
            return res.status(404).json({ message: 'Unable to Create Advertisement' });
        }
    }

    static async getAd(req, res) {

    }

    static async deleteAd(req, res) {
        try {
            const response = await advertisementService.deleteAdvertisement(req.params.id);
            if(response && response.deletedCount && response.deletedCount === 1) {
                res.send({response});
            }
        } catch(error) {
            return res.status(404).json({ message: 'Unable to delete Advertisement, please check the Advertisement id' });
        }
        return res.status(404).json({ message: 'Unable to find Advertisement' });
    }
}

module.exports = {
    AdsController
};

