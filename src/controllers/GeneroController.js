const Controller = require('./Controller.js')
const GenerosServices = require('../services/GenerosServices.js')

const generosServices = new GenerosServices();

class GeneroController extends Controller{
    constructor(){
        super(generosServices)

    }

}

module.exports = GeneroController;