const Sequelize = require('sequelize');

const sequelize = new Sequelize('names','root','Mysucks@55',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;