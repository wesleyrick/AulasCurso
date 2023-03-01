const sequelize = require('sequelize');
const database = new  sequelize('armazem','root','',
{
    host:"localhost",
    dialect:'mariadb'
});

database.sync();

module.exports = database;