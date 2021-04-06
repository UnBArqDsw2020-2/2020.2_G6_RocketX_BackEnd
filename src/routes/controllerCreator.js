const RocketController = require('../controllers/RocketController');
const MissionController = require('../controllers/MissionController');

function ControllerCreator () {
    this.createRocket = function() {
        controller = new RocketController();
        controller.type = "rocket";
        return controller;
    }
    this.createMission = function() {
        var controller = new MissionController();
        controller.type = "mission";
        return controller;
    }
    this.createLandingPad = function() {
        var controller = new LandingPadController();
        controller.type = "landingPad";
        return controller;
    }
    this.createUser = function() {
        var controller = new UserController();
        controller.type = "user";
        return controller;
    }
}

module.exports = ControllerCreator;