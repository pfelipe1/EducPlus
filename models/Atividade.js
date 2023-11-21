const {DataTypes} = require('sequelize')

const db =  require('../db/conn')

const User = require('./User')

const Atividade = db.define('Atividade', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Atividade.belongsTo(User)
// User.hasMany(Atividade)
module.exports = Atividade;
