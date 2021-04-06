const RocketController = require('../controllers/RocketController');
const MissionController = require('../controllers/MissionController');

const ControllerCreator = {
    createRocket : function() {
        controller = new RocketController();
        controller.type = "rocket";
        return controller;
    },
    createMission : function() {
        var controller = new MissionController();
        controller.type = "mission";
        return controller;
    },
    createLandingPad : function() {
        var controller = new LandingPadController();
        controller.type = "landingPad";
        return controller;
    },
    createUser : function() {
        var controller = new UserController();
        controller.type = "user";
        return controller;
    }
}

module.exports = ControllerCreator;