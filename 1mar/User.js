const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class User extends Model { }

User.init({
    nomeUsuario: {
        type: DataTypes.STRING
    },
    emailUsuario: {
        type: DataTypes.STRING
    },
    senhaUsuario: {
        type: DataTypes.STRING
    }


}, {
    sequelize,
     modelName: 'usuarios',
     timestamps: false
})

module.exports = User ;