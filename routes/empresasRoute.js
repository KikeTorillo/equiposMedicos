const express = require('express');

const EmpresasService = require('../services/empresasService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createEmpresaSchema, updateEmpresaSchema, getEmpresaSchema } = require('./../schemas/empresaSchema');

const router = express.Router();

const service = new EmpresasService();

router.get('/', async (req, res, next) => {
  try {
    const empresas = await service.find();
    res.json(empresas);
  } catch (error) {
    next(error);
  }
});

router.get('/:codigo',
  validatorHandler(getEmpresaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const empresa = await service.findOne(codigo);
      res.json(empresa);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createEmpresaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newEmpresa = await service.create(body);
      res.json(newEmpresa);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:codigo',
  validatorHandler(getEmpresaSchema, 'params'),
  validatorHandler(updateEmpresaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const body = req.body;
      const empresa = await service.update(codigo, body)
      res.json(empresa);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:codigo',
validatorHandler(getEmpresaSchema, 'params'),
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

