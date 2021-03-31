const { Router } = require('express');
const Rocket = require('../models/Rocket');
const routes = Router();

routes.get('/', async (request, response) => {

    resultadoCreate = await Rocket.create({
        name: "Falcon 9",
        description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
        height: 70,
        mass: 549054,
        cost_per_launch: 50000000
    });

    return response.json(resultadoCreate);
});

module.exports = routes;