const Base = require('./Base');
const RocketModel = require('../models/Rocket');

module.exports = class RocketBase extends Base {
  constructor() {
    super();
  }

  async create(newRocket) {
    try {
      super.model = new RocketModel();
      let rocket = {};

      rocket.rocket_name = newRocket.rocket_name;
      rocket.description = newRocket.description;
      rocket.cost_per_launch = newRocket.cost_per_launch;
      rocket.height = newRocket.height;
      rocket.mass = newRocket.mass;
      rocket.country = newRocket.country;
      rocket.company = newRocket.company;

      const asd = await super.create(newRocket);
      console.log(asd)

      return Rocket;
    } catch (error) {
      throw { status: 400, message: error.errors[0].message };
    }
  }

}