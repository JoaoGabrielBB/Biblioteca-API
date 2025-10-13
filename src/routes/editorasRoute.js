const { Router } = require('express');
const EditoraController = require('../controllers/EditoraController.js');

const editoraController = new EditoraController();

const router = Router();

router.get('/editoras', (req, res) => editoraController.pegaTodos(req,res));
router.get('/editoras/:id', (req, res) => editoraController.pegarUmPorId(req,res));
router.post('/editoras', (req, res) => editoraController.criaNovo(req, res));
router.put('/editoras/:id', (req, res) => editoraController.atualiza(req,res));
router.delete('/editoras/:id', (req, res) => editoraController.exclui(req, res));

module.exports = router;