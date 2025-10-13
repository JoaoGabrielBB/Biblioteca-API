const Controller = require('./Controller.js')
const EditorasServices = require('../services/EditorasServices.js')

const editorasServices = new EditorasServices();

class EditoraController extends Controller{
    constructor(){
        super(editorasServices)

    }

}

module.exports = EditoraController;