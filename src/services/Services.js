const { where, Transaction} = require('sequelize');
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
}

module.exports = Services;