const { Router } = require('express');
const routes = Router();
const ControllerCreator = require('./ControllerCreator');
// singleton

const rocketController = ControllerCreator.createRocket();

routes.get('/', rocketController.create);

module.exports = routes;