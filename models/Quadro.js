const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Quadro = sequelize.define('Quadro', {
  id_quadro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tamanho_quadro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Quadro;