// database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bicicleta', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
