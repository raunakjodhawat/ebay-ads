import Express from 'express';
import Config from './config';
import Controller from './controllers/_controllerManager';

// Build a basic express app
const app = Express();
const { port } = Config.server;

app.use('/', new Controller.Controller());

// Start listening
app.listen(port, () => console.log(`Ebay Ads TEST API started at: ${port}!`));

