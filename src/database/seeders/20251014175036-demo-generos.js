'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('generos', [
      { nome: 'Terror', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Romance', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Ação', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('generos', null, {});
  }
};