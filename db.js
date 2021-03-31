const Sequelize = require('sequelize');
const sequelize = new Sequelize('rocketx_board', 'postgres', 'rocket', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;