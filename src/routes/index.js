const express = require('express');
const path = require('path');
const livros = require('./livrosRoute.js');



module.exports = app => {
    app.use(
        express.json(),
        livros


    );
};