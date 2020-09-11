const express = require('express');
const ads = require('./AdsController');
const logger = require('../middlewares/loggerMiddleware');

class Controller {
  constructor() {
    this.router = express.Router();
    try {
      this.router.use('/api/v1/', [
        express.json(),
        logger.logIncomingRequest,
        new ads.AdsController(),
      ]);
    } catch (e) {
      console.error(e);
      throw e;
    }
    return this.router;
  }
}

module.exports = {
    Controller
};

