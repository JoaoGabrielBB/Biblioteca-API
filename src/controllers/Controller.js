const converterIds = require('../utils/conversorDeStringHelper.js')

class Controller{
    constructor(entidadeService){
        this.entidadeService = entidadeService;
    }   

    async pegaTodos(req, res){
        try {
            const listaDeDados = await this.entidadeService.pegaTodosOsDados()
            return res.status(200).json(listaDeDados)
        } catch (error) {
                console.error(error);
                res.status(500).send('Erro interno no servidor');
        }
    }
    async pegarUmPorId(req, res){
        const {id} = req.params;
        
        try {
            const umRegistro = await this.entidadeService.pegaUmDadoPorId(Number(id));
            return res.status(200).json(umRegistro);
        } catch (error) {
            return res.status(500).json({erro: "Infelizmente deu certo nao parceiro"})
        }

    }
}

module.exports = Controller;