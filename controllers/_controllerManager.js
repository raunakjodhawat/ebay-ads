const Express = require('express');
const Ads = require('./AdsController');
const Logger = require('../middlewares/loggerMiddleware');

class Controller {
  constructor() {
    this.router = Express.Router();
    try {
      this.router.use('/api/v1/', [
        Express.json(),
        Logger.logIncomingRequest,
        new Ads.AdsController(),
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

