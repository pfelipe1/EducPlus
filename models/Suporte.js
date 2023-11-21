const {DataTypes} = require('sequelize')

const db =  require('../db/conn')

const User = require('./User')

const Suporte = db.define('Suporte', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Suporte.belongsTo(User)
// User.hasMany(Suporte)
module.exports = Suporte;
