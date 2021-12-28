const express = require('express');
const MarcasService = require('../services/marcasService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createMarcaSchema, updateMarcaSchema, getMarcaSchema } = require('./../schemas/marcasSchema');

const router = express.Router();

const service = new MarcasService();

router.get('/', async (req, res, next) => {
  try {
    const marcas = await service.find();
    res.json(marcas);
  } catch (error) {
    next(error);
  }
});

router.get('/:codigo',
  validatorHandler(getMarcaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const marca = await service.findOne(codigo);
      res.json(marca);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createMarcaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newMarca = await service.create(body);
      res.json(newMarca);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:codigo',
  validatorHandler(getMarcaSchema, 'params'),
  validatorHandler(updateMarcaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const body = req.body;
      const marca = await service.update(codigo, body)
      res.json(marca);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:codigo',
validatorHandler(getMarcaSchema, 'params'),
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
