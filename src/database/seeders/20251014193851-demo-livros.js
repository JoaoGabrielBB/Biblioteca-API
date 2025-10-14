'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('livros', [{
      titulo: 'Desenhos Ocultos',
      resumo: 'Uma babá encontra desenhos assustadores feitos por uma criança.',
      sinopse: 'Mallory Quinn só queria um recomeço simples...',
      foto: 'uploads/DesenhosOcultos/desenhosOcultos.jpg',
      autorId: 1,
      editoraId: 1,
      generoId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('livros', null, {});
  }
};
