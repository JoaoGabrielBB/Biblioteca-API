const Controller = require('./Controller.js')
const LivrosServices = require('../services/LivrosServices.js')

const livrosServices = new LivrosServices();

class LivroController extends Controller{
    constructor(){
        super(livrosServices)

    }

 static async pegaUm(req, res) {
    try {
      const { id } = req.params;
      const livro = await livrosServices.pegaUmDadoPorId(id);
      return res.status(200).json(livro);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Erro ao buscar livro");
    }
  }
}

module.exports = LivroController;