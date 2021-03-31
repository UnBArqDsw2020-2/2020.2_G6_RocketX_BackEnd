const Sequelize = require('sequelize');
const sequelize = new Sequelize({database: 'rocketx_board', username: 'postgres', password : 'rocket', options : {
    host: 'localhost',
    dialect: 'postgres'
}});

module.exports = sequelize;