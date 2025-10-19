const Services = require('./Services.js');
const database = require('../database/models')

class LivrosServices extends Services {
    constructor(){
        super('Livro')

    }
 // Sobrescreve o método que busca 1 livro por ID

  async pegaTodosOsDados() {
    return database[this.model].findAll({
      include: [
        { model: database.Autor, as: 'autor', attributes: ['nome'] },
        { model: database.Genero, as: 'genero', attributes: ['nome'] },
        { model: database.Editora, as: 'editora', attributes: ['nome'] }
      ]
    });
  }

  async pegaUmDadoPorId(id) {
    return database[this.model].findByPk(id, {
      include: [
        { model: database.Autor, as: 'autor', attributes: ['nome'] },
        { model: database.Genero, as: 'genero', attributes: ['nome'] },
        { model: database.Editora, as: 'editora', attributes: ['nome'] }
      ]
    });
  }
}

module.exports = LivrosServices;