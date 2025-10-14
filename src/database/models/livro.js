'use strict';
const { foreign_key } = require('i/lib/methods');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    static associate(models) {
      Livro.belongsTo(models.Autor, {
        foreignKey: 'autorId',
        as: 'autor'
      });
      Livro.belongsTo(models.Genero, {
        foreignKey: 'generoId',
        as: 'genero'
      });
      Livro.belongsTo(models.Editora, {
        foreignKey: 'editoraId',
        as: 'editora'
      });
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