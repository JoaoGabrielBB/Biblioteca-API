const express = require('express');
const routes = require('./routes')
const path = require('path');

// Permite ler JSON no corpo das requisições
const app = express();

// Configura a pasta "uploads" como pública
app.use('/uploads', express.static(path.join(__dirname, './uploads')));


// Suas rotas
routes(app);

module.exports = app;