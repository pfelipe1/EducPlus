const {DataTypes} = require('sequelize')

const db =  require('../db/conn')

const User = require('./User')

const Curso = db.define('Curso', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Curso.belongsTo(User)
// User.hasMany(Curso)
module.exports = Curso;
