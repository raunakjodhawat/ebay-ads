import Express from 'express';
import Ads from './AdsController';
import Logger from '../middlewares/loggerMiddleware';

class Controller {
  constructor() {
    this.router = Express.Router();
    try {
      this.router.use('/api/v1/', [
        Express.json(),
        new Logger.LoggerMiddleWare(),
        new Ads.AdsController(),
      ]);
    } catch (e) {
      console.error(e);
      throw e;
    }
    return this.router;
  }
}

export default {
  Controller,
};

