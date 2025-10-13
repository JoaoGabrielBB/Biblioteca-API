'use strict';
const { foreign_key } = require('i/lib/methods');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    static associate(models) {
      Livro.hasMany(models.Autor,{
        foreignkey: 'nome'
      })
    }
  }
  Livro.init({
    titulo: DataTypes.STRING,
    genero: DataTypes.STRING,
    resumo: DataTypes.STRING,
    autor: DataTypes.STRING,
    editora: DataTypes.STRING,
    foto: DataTypes.STRING, //mexer nisso aqui pras por as fotos
    sinopse: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Livro',
    tableName: 'livros',
  });
  return Livro;
};