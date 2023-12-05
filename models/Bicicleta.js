const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Bicicleta = sequelize.define('Bicicleta', {
  codigo_bicicleta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  marca_bicicleta: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cor_bicicleta: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_quadro: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Bicicleta;
