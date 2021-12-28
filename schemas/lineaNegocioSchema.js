const joi = require('joi');

const codigo = joi.string().alphanum();
const descripcion = joi.string();

const createLineaNegocioSchema = joi.object({
  codigo: codigo.required(),
  descripcion: descripcion.required(),
});

const updateLineaNegocioSchema = joi.object({
  descripcion: descripcion.required(),
});

const getLineaNegocioSchema = joi.object({
  codigo: codigo.required(),
});

module.exports = { createLineaNegocioSchema, updateLineaNegocioSchema, getLineaNegocioSchema}
