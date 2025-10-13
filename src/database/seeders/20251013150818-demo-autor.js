'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('autores', [{
        nome: 'Marcos Almeida',
        biografia: 'Marcos escreve sobre o que a maioria prefere esquecer: a parte sombria da mente humana. Comparado a Stephen King pela forma como transforma o comum em inquietante, ele acredita que o verdadeiro terror não vem de monstros, mas de pensamentos que insistem em não calar.Entre cafés frios e noites insones, cria histórias onde a loucura tem lógica e a sanidade é apenas uma ilusão conveniente.',
        foto: 'uploads/marcosAlmeida/marcosAlmeida.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('autores', null, {});

  }
};
