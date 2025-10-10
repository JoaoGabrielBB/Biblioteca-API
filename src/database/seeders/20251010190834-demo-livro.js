'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('livros', [{
        titulo: 'Desenhos ocultos',
        resumo: 'Mallory queria apenas recomeçar. Cuidar de um garoto parecia simples… até que os desenhos dele começaram a mostrar algo sombrio, algo que não vinha de uma criança. Entre traumas e visões, ela tenta entender se o mal está nos papéis — ou dentro dela mesma.',
        foto: 'uploads/DesenhosOcultos/desenhosOcultos.jpg',
        sinopse: 'Mallory Quinn só queria um recomeço simples: um emprego estável, uma casa tranquila e nenhuma recaída. O que ela não esperava era que o garoto de cinco anos que ela cuida tivesse o dom de desenhar cenas de crime com a precisão de um perito forense. Agora, entre rabiscos suspeitos, noites mal dormidas e a constante dúvida se está vendo fantasmas ou perdendo a sanidade, Mallory precisa resolver um mistério digno de uma terapia em grupo.Porque, no fim, nada assusta mais do que uma criança sorridente dizendo: “Olha, eu desenhei você.”',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('livros', null, {});

  }
};
