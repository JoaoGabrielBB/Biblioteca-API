const express = require('express');
const cors = require('cors')
const routes = require('./routes')
const path = require('path');

// Permite ler JSON no corpo das requisições
const app = express();


//Permir as requisições do Vite
app.use(cors({
    origin: 'http://localhost:5173', //<= Endereço Padrã do Vite
}))


// Configura a pasta "uploads" como pública
app.use(express.json())///<= Permite JSON e uploads
app.use('/uploads', express.static(path.join(__dirname, './uploads')));


// Suas rotas
routes(app);

module.exports = app;