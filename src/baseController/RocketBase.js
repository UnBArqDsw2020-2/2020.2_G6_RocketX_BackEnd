import Base from './Base';
import RocketModel from '../models/Rocket';

class RocketBase extends Base {
  constructor() {
    super(RocketModel);
  }

  async create(newRocket) {
    try {
      let rocket = {};
      rocket.rocket_id = newRocket.rocket_id;
      rocket.rocket_name = newRocket.rocket_name;
      rocket.cost_per_launch = newRocket.cost_per_launch;
      rocket.country = newRocket.country;
      rocket.company = newRocket.company;
      let date = new Date();
      rocket.createdAt =
        date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

      const Rocket = await super.create(rocket);
      return Rocket;
    } catch (error) {
      throw { status: 400, message: error.errors[0].message };
    }
  }

}

export default new RocketBase();

