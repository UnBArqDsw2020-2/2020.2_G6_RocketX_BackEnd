const Sequelize = require('sequelize');
const database = require('../../db');

const Rocket = database.define('rocket', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: Sequelize.STRING,
    height: Sequelize.INTEGER,
    mass: Sequelize.INTEGER,
    cost_per_launch: Sequelize.INTEGER
})

module.exports = Rocket;