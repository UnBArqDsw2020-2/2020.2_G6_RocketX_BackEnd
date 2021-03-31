const { Router } = require('express');
const RocketController = require('../controllers/RocketController');
const routes = Router();

routes.get('/create', RocketController);

module.exports = routes;