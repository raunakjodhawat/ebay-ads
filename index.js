const Express = require('express');
const Config = require('./config');
const Controller = require('./controllers/_controllerManager');

// Build a basic express app
const app = Express();
const { port } = Config.server;

app.use('/', new Controller.Controller());

// Start listening
app.listen(port, () => console.log(`Ebay Ads TEST API started at: ${port}!`));

