'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    static associate(models) {
      // Associação com Autor 
      Livro.belongsTo(models.Autor, {
        foreignKey: 'autorId',
        as: 'autorInfo' // 👈 adiciona um alias diferente
      });

      // Associação com Editora
      Livro.belongsTo(models.Editora, {
        foreignKey: 'editoraId',
        as: 'editoraInfo'
      });

      // Associação com Gênero
      Livro.belongsTo(models.Genero, {
        foreignKey: 'generoId',
        as: 'generoInfo'
      });
    }
  }

  Livro.init({
    titulo: DataTypes.STRING,
    resumo: DataTypes.STRING,
    sinopse: DataTypes.STRING,
    foto: DataTypes.STRING,
    autorId: DataTypes.INTEGER,
    editoraId: DataTypes.INTEGER,
    generoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Livro',
    tableName: 'livros',
  });

  return Livro;
};
