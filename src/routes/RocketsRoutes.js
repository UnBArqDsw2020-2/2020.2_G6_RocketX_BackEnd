const { Router } = require('express');
const routes = Router();
const ControllerCreator = require('./ControllerCreator');
// singleton


const rocketController = ControllerCreator.createRocket();

routes.post('/', rocketController.create);

routes.get('/', rocketController.listAll);

module.exports = routes;