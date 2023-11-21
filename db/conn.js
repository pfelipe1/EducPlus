const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('educmais', 'root', 'bancodedados', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;