'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    static associate(models) {
      Autor.hasMany(models.Livro, {
        foreignKey: 'autorId',
        as: 'livros'
      });
    }
  }
  
  Autor.init({
    nome: DataTypes.STRING,
    biografia: DataTypes.STRING,
    biografia_resumo: {
    type: DataTypes.STRING, // ou TEXT se for mais longo
    allowNull: true},
    foto: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Autor',
    tableName: 'autores',
  });
  
  return Autor;
};
