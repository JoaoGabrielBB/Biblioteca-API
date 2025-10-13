const { Router } = require('express');
const AutorController = require('../controllers/AutorController.js');

const autorController = new AutorController();

const router = Router();

router.get('/autores', (req, res) => autorController.pegaTodos(req,res));
router.get('/autores/:id', (req, res) => autorController.pegarUmPorId(req,res));
router.post('/autores', (req, res) => autorController.criaNovo(req, res));
router.put('/autores/:id', (req, res) => autorController.atualiza(req,res));
router.delete('/autores/:id', (req, res) => autorController.exclui(req, res));

module.exports = router;