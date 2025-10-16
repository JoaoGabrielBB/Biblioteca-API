'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('autores', [
      { nome: 'Marcos Almeida', 
        biografia: 'Escreve sobre a parte sombria da mente humana.', 
        foto: 'uploads/DesenhosOcultos/desenhosOcultos.jpg', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { nome: 'Julia Santos',
        biografia: 'Romancista de histórias emocionantes.', 
        biografia_resumo: "Kafka foi um escritor tcheco conhecido por obras existencialistas.",
        foto: 'uploads/JuliaSantos.jpg', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('autores', null, {});
  }
};
