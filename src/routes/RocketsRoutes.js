const { Router } = require('express');
const routes = Router();
const ControllerCreator = require('./ControllerCreator');
// singleton

const creator = new ControllerCreator();

const rocketController = creator.createRocket();

routes.post('/', rocketController.create);

routes.get('/', rocketController.listAll);

module.exports = routes;