const Express = require('express');

class AdsController {
    constructor() {
        this.router = Express.Router();
        this.router.post('/ads', AdsController.createAd);
        this.router.get('/ads', AdsController.getAd);
        return this.router;
    }

    static async createAd(req, res) {
        
    }

    static async getAd(req, res) {

    }
}

module.exports = {
    AdsController
};

