const {DataTypes} = require('sequelize')

const db =  require('../db/conn')

const User = require('./User')

const Materia = db.define('Materia', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Materia.belongsTo(User)
// User.hasMany(Materia)
module.exports = Materia;
