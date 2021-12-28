const express = require('express');
const FamiliasService = require('../services/familiasService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createFamiliaSchema, updateFamiliaSchema, getFamiliaSchema } = require('./../schemas/familiaSchema');

const router = express.Router();

const service = new FamiliasService();

router.get('/', async (req, res, next) => {
  try {
    const familias = await service.find();
    res.json(familias);
  } catch (error) {
    next(error);
  }
});

router.get('/:codigo',
  validatorHandler(getFamiliaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const familia = await service.findOne(codigo);
      res.json(familia);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createFamiliaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newFamilia = await service.create(body);
      res.json(newFamilia);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:codigo',
  validatorHandler(getFamiliaSchema, 'params'),
  validatorHandler(updateFamiliaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const body = req.body;
      const familia = await service.update(codigo, body)
      res.json(familia);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:codigo',
validatorHandler(getFamiliaSchema, 'params'),
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
