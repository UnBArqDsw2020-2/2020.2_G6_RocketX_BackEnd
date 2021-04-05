const Base = require('./Base');
const RocketModel = require('../models/Rocket');

// Decorator

RocketBase.prototype = new Base(RocketModel);

function RocketBase (){
  this.create = async function(newRocket) {
    try {
      let rocket = {};

      let rocket = await super.create(newRocket);

      const createdRocket = await RocketBase.prototype.create(rocket);
      // console.log(createdRocket)

      return createdRocket;
    } catch (error) {
      throw { status: 400, message: error.errors[0].message };
    }
  }
}


module.exports = RocketBase;