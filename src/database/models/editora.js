'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Editora extends Model {
    static associate(models) {
      Editora.hasMany(models.Livro, {
        foreignKey: 'editoraId',
        as: 'livros'
      });
    }
  }
  
  Editora.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Editora',
    tableName: 'editoras',
  });
  return Editora;
};