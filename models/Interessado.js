const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Interessado = sequelize.define('Interessado', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  altura: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Interessado;
