const {DataTypes} = require('sequelize')

const db =  require('../db/conn')

const User = require('./User')

const Cadastro = db.define('Cadastro', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Cadastro.belongsTo(User)
// User.hasMany(Cadastro)
module.exports = Cadastro;
