const { Router } = require('express');

const RocketsRoutes = require('./RocketsRoutes');
const MissionsRoutes = require('./MissionsRoutes');
const UsersRoutes = require('./UsersRoutes');
const LandingPadsRoutes = require('./LandingPadsRoutes');

const routes = Router();

// Facade

routes.use('/rockets', RocketsRoutes);
routes.use('/missions', MissionsRoutes);
routes.use('/users', UsersRoutes);
routes.use('/landing_pads', LandingPadsRoutes);

module.exports = routes;