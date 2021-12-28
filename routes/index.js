const express = require('express');
const productsRouter = require('./productsRoute');
const usersRouter = require('./usersRoute');
const empresasRoute = require('./empresasRoute');
const familiasRoute = require('./familiasRoute');
const lineasNegocioRoute = require('./lineasNegocioRoute');
const marcasRoute = require('./marcasRoute');
const modelosRoute = require('./modelosRoute');
const tiposProductoRoute = require('./tiposProductoRoute');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/empresas', empresasRoute);
  router.use('/familias', familiasRoute);
  router.use('/lineasnegocio', lineasNegocioRoute);
  router.use('/marcas', marcasRoute);
  router.use('/modelos', modelosRoute);
  router.use('/tiposproducto', tiposProductoRoute);
}

module.exports = routerApi;
