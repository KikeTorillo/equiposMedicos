const express = require('express');
const ModelosService = require('../services/modelosService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createModeloSchema, updateModeloSchema, getModeloSchema } = require('./../schemas/modelosSchema');

const router = express.Router();

const service = new ModelosService();

router.get('/', async (req, res, next) => {
  try {
    const modelos = await service.find();
    res.json(modelos);
  } catch (error) {
    next(error);
  }
});

router.get('/:codigo',
  validatorHandler(getModeloSchema, 'params'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const modelo = await service.findOne(codigo);
      res.json(modelo);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createModeloSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newModelo = await service.create(body);
      res.json(newModelo);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:codigo',
  validatorHandler(getModeloSchema, 'params'),
  validatorHandler(updateModeloSchema, 'body'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const body = req.body;
      const modelo = await service.update(codigo, body)
      res.json(modelo);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:codigo',
validatorHandler(getModeloSchema, 'params'),
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
