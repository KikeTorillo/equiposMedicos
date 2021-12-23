const express = require('express');
const productsRouter = require('./productsRoute');
const usersRouter = require('./usersRoute');
const empresasRoute = require('./empresasRoute');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/empresas', empresasRoute);
}

module.exports = routerApi;
