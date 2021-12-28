const express = require('express');
const TiposProductoService = require('../services/tiposProductoService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createTiposProductochema, updateTiposProductoSchema, getTiposProductoSchema } = require('./../schemas/tiposProductoSchema');

const router = express.Router();

const service = new TiposProductoService();

router.get('/', async (req, res, next) => {
  try {
    const tiposProducto = await service.find();
    res.json(tiposProducto);
  } catch (error) {
    next(error);
  }
});

router.get('/:codigo',
  validatorHandler(getTiposProductoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const tipoProducto = await service.findOne(codigo);
      res.json(tipoProducto);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createTiposProductochema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newTipoProducto = await service.create(body);
      res.json(newTipoProducto);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:codigo',
  validatorHandler(getTiposProductoSchema, 'params'),
  validatorHandler(updateTiposProductoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const body = req.body;
      const tipoProducto = await service.update(codigo, body)
      res.json(tipoProducto);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:codigo',
validatorHandler(getTiposProductoSchema, 'params'),
async (req, res, next) => {
  try {
    const { codigo } = req.params;
    const response = await service.delete(codigo);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
