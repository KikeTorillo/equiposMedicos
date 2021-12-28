const joi = require('joi');

const codigo = joi.string().alphanum();
const descripcion = joi.string();

const createModeloSchema = joi.object({
  codigo: codigo.required(),
  descripcion: descripcion.required(),
});

const updateModeloSchema = joi.object({
  descripcion: descripcion.required(),
});

const getModeloSchema = joi.object({
  codigo: codigo.required(),
});

module.exports = { createModeloSchema, updateModeloSchema, getModeloSchema}
