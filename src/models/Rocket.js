const Sequelize = require('sequelize');
const database = require('../../db');

const Rocket = database.define({modelName: 'rocket', attributes : {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    rocket_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: Sequelize.STRING,
    height: Sequelize.INTEGER,
    mass: Sequelize.INTEGER,
    cost_per_launch: Sequelize.INTEGER,
    country : Sequelize.STRING,
    company : Sequelize.STRING,
}})

module.exports = Rocket;