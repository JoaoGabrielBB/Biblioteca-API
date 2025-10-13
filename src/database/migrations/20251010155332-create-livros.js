'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      genero: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {model: 'generos', key: 'nome'}
      },
      resumo: {
        type: Sequelize.STRING
      },
      autor: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {model: 'autores', key: 'nome'}
      },
      editora: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {model: 'editoras', key: 'nome'}
      },
      foto: {
        type: Sequelize.STRING
      },
      sinopse: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('livros');
  }
};