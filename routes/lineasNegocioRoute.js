const express = require('express');
const LineasNegocioService = require('../services/lineasNegocioService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createLineaNegocioSchema, updateLineaNegocioSchema, getLineaNegocioSchema } = require('./../schemas/lineaNegocioSchema');

const router = express.Router();

const service = new LineasNegocioService();

router.get('/', async (req, res, next) => {
  try {
    const lineasnegocio = await service.find();
    res.json(lineasnegocio);
  } catch (error) {
    next(error);
  }
});

router.get('/:codigo',
  validatorHandler(getLineaNegocioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const lineanegocio = await service.findOne(codigo);
      res.json(lineanegocio);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createLineaNegocioSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newLineaNegocio = await service.create(body);
      res.json(newLineaNegocio);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:codigo',
  validatorHandler(getLineaNegocioSchema, 'params'),
  validatorHandler(updateLineaNegocioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const body = req.body;
      const lineanegocio = await service.update(codigo, body)
      res.json(lineanegocio);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:codigo',
validatorHandler(getLineaNegocioSchema, 'params'),
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
