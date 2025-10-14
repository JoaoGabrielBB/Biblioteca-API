'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('editoras', [
      { nome: 'Editora ABC', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Editora XYZ', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('editoras', null, {});
  }
};
