'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genero extends Model {
  static associate(models) {
      Genero.hasMany(models.Livro, {
        foreignKey: 'generoId',
        as: 'livros'
      });
    }
  }
  
  Genero.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genero',
    tableName: 'generos',
  });
  return Genero;
};