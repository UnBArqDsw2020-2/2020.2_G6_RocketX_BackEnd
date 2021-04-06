const Base = require('./Base');
const RocketModel = require('../models/Rocket');

// Decorator

RocketBase.prototype = new Base(RocketModel);

function RocketBase (){
  this.create = async function(newRocket) {
    try {
      const createdRocket = await RocketBase.prototype.create(newRocket);

      return createdRocket;
    } catch (error) {
      throw { status: 400, message: error.errors[0].message };
    }
  }

  this.listAll = async function() {
    try {
      let rockets = await RocketBase.prototype.listAll();

      return rockets;
    } catch (error) {
      throw { status: 400, message: error.errors[0].message };
    }
  }
}


module.exports = RocketBase;