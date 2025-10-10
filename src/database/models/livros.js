'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Livros.init({
    titulo: DataTypes.STRING,
    genero: DataTypes.STRING,
    resumo: DataTypes.STRING,
    autor: DataTypes.STRING,
    editora: DataTypes.STRING,
    foto: DataTypes.STRING, //mexer nisso aqui pras por as fotos
    sinopse: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Livros',
    tableName: 'livros',
  });
  return Livros;
};