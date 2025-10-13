const { Router } = require('express');
const GeneroController = require('../controllers/GeneroController.js');

const generoController = new GeneroController();

const router = Router();

router.get('/generos', (req, res) => generoController.pegaTodos(req,res));
router.get('/generos/:id', (req, res) => generoController.pegarUmPorId(req,res));
router.post('/generos', (req, res) => generoController.criaNovo(req, res));
router.put('/generos/:id', (req, res) => generoController.atualiza(req,res));
router.delete('/generos/:id', (req, res) => generoController.exclui(req, res));

module.exports = router;