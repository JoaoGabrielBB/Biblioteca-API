const Controller = require('./Controller.js')
const AutoresServices = require('../services/AutoresServices.js')

const autoresServices = new AutoresServices();

class AutorController extends Controller{
    constructor(){
        super(autoresServices)

    }

}

module.exports = AutorController;