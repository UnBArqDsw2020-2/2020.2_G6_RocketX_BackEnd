const RocketBase = require('../baseController/RocketBase');

module.exports = class RocketController {
    async create(req, res) {
        try {
            const rocketBase = new RocketBase();

            let teste = {
                rocket_name: "Falcon 9",
                description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
                height: 70,
                mass: 549054,
                cost_per_launch: 50000000,
                country: "United States",
                company: "SpaceX",

            };
            const rocket = await rocketBase.create(teste);
            return res.json(rocket);
        } catch (error) {
            return res.status(400).json({ message: error.message || error });
        }
    }
}