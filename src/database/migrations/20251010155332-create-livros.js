'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      autorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'autores',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      editoraId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'editoras',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      generoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'generos',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      resumo: {
        type: Sequelize.STRING,
      },
      sinopse: {
        type: Sequelize.STRING,
      },
      foto: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('livros');
  },
};
