const Base = require('./Base');
const RocketModel = require('../models/Rocket');

class RocketBase extends Base {
  constructor() {
    super(RocketModel);
  }

  async create(newRocket) {
    try {
      newRocket.height = 100;
      newRocket.cost_per_launch = 10000000;

      let rocket = await super.create(newRocket);

      return rocket;
    } catch (error) {
      throw { status: 400, message: error.errors[0].message };
    }
  }
}
module.exports = RocketBase;