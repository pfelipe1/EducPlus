const {DataTypes} = require('sequelize')

const db =  require('../db/conn')

const User = require('./User')

const Login = db.define('Login', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    }

})


// Login.belongsTo(User)
// User.hasMany(Login)
module.exports = Login;
