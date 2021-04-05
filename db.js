const Sequelize = require('sequelize');

// singleton
const sequelize = new Sequelize('rocketx_board', 'postgres', 'rocket',
    {
        host: 'localhost',
        dialect: 'postgres'
    });

module.exports = sequelize;