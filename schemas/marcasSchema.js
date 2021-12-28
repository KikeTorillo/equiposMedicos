const joi = require('joi');

const codigo = joi.string().alphanum();
const descripcion = joi.string();

const createMarcaSchema = joi.object({
  codigo: codigo.required(),
  descripcion: descripcion.required(),
});

const updateMarcaSchema = joi.object({
  descripcion: descripcion.required(),
});

const getMarcaSchema = joi.object({
  codigo: codigo.required(),
});

module.exports = { createMarcaSchema, updateMarcaSchema, getMarcaSchema}
