const Controller = require('./Controller.js')
const LivrosServices = require('../services/LivrosServices.js')

const livrosServices = new LivrosServices();

class LivroController extends Controller{
    constructor(){
        super(livrosServices)

    }

}

module.exports = LivroController;