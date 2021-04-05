const RocketBase = require('../baseController/RocketBase');


// controller 
// Decorator

RocketController.prototype = new RocketBase();

function RocketController () {
    this.create = async function(req, res) {
        try {

            let teste = {
                rocket_name: "Falcon 9",
                description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
                height: 70,
                mass: 549054,
                cost_per_launch: 50000000,
                country: "United States",
                company: "SpaceX",

            };
            const rocket = await RocketController.prototype.create(teste);
            return res.json(rocket);
        } catch (error) {
            return res.status(400).json({ message: error.message || error });
        }
    }
}

module.exports = RocketController;