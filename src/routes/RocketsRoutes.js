const { Router } = require('express');
const RocketController = require('../controllers/RocketController');
const routes = Router();

const rocketController = new RocketController();

routes.get('/', rocketController.create);

module.exports = routes;