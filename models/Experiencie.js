const {DataTypes} = require('sequelize')

const db =  require('../db/conn')

const User = require('./User')

const Experiencie = db.define('Experiencie', {
    ensinoMedio: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Cursos: {
        type: DataTypes.STRING,
        allowNull: false
    },


})

User.hasMany(Experiencie)
Experiencie.belongsTo(User)
module.exports = Experiencie;
