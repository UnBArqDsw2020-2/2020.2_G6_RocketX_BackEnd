const Base = require('./Base');
const RocketModel = require('../models/Rocket');

// Decorator

RocketBase.prototype = new Base(RocketModel);

function RocketBase (){
  this.create = async function(newRocket) {
    try {
      let rocket = {};

      rocket.rocket_name = newRocket.rocket_name;
      rocket.description = newRocket.description;
      rocket.cost_per_launch = newRocket.cost_per_launch;
      rocket.height = newRocket.height;
      rocket.mass = newRocket.mass;
      rocket.country = newRocket.country;
      rocket.company = newRocket.company;

      const createdRocket = await RocketBase.prototype.create(rocket);
      // console.log(createdRocket)

      return createdRocket;
    } catch (error) {
      throw { status: 400, message: error.errors[0].message };
    }
  }
}


module.exports = RocketBase;