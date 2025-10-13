const express = require('express');
const path = require('path');
const livros = require('./livrosRoute.js');
const autores = require('./autoresRoute.js');
const generos = require('./generosRoute.js');
const editoras = require('./editorasRoute.js');



module.exports = app => {
    app.use(
        express.json(),
        livros,
        autores,
        generos,
        editoras
    );
};