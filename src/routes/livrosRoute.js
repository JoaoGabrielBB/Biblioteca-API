const { Router } = require('express');
const LivroController = require('../controllers/LivroController.js');

const livroController = new LivroController();

const router = Router();

router.get('/livros', (req, res) => livroController.pegaTodos(req,res));
router.get('/livros/:id', (req, res) => livroController.pegarUmPorId(req,res));
router.post('/livros', (req, res) => livroController.criaNovo(req, res));
router.put('/livros/:id', (req, res) => livroController.atualiza(req,res));
router.delete('/livros/:id', (req, res) => livroController.exclui(req, res));

module.exports = router;