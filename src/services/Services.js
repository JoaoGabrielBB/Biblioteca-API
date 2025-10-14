const { where, transaction} = require('sequelize');
const dataSource = require('../database/models')

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }
    async pegaTodosOsDados(where = {}) {
        return dataSource[this.model].findAll({where: {...where}});
    }
    async pegaUmDadoPorId(id){
        return dataSource[this.model].findByPk(id);
    }

    async criaDado(dadosDoRegistro){
        return dataSource[this.model].create(dadosDoRegistro);
    }

    async atualizaDado(dadosAtualizados, where){
        const listaDadosAtualizados = await dataSource[this.model].update(dadosAtualizados,{
            where: {...where},
   
        });
        if(listaDadosAtualizados[0] === 0){
            return false
        }
        return true
    }  
    
    async deletaDado(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;