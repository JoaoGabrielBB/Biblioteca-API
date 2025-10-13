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

    async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoDadoCriado = await this.entidadeService.criaDado(dadosParaCriacao);
      return res.status(200).json(novoDadoCriado);
    } catch (erro) {
      return res.status(500).json({erro: erro.message})
    }
  }

    async atualiza(req, res){
        const { ...params } = req.params;
        const dadosAtualizados = req.body;
        
        const where = converteIds(params)
        //isUpdate
        const foiAtualizado = await this.entidadeService.atualizaDado(dadosAtualizados, where);
      if (!foiAtualizado) {
        return res.status(400).json({ mensagem: 'registro não foi atualizado' });
      }
      return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }

    async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.deletaDado(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (erro) {
      return res.status(500).json({erro: erro.message})
    }
  }
}

module.exports = Controller;