const path = require('path')

const express = require('express');

const routes = express.Router();


routes.get('/', (req, res, next) => {
  res.send(`<h1>Hii from Home</h1>`);
});


routes.get('/users', (req, res, next) => {
  res.send(`<h1>This page is for users</h1>`)
});


routes.get('/products', (req, res, next) => {
  res.send(`<h1>This page is for Products.</h1>`)
});


routes.get('/form', (req, res, next) => {

  res.sendFile(path.join(__dirname, 'views', 'product.html'));
})


module.exports = routes;