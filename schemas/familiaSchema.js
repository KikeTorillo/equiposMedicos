const joi = require('joi');

const codigo = joi.string().alphanum();
const descripcion = joi.string();

const createFamiliaSchema = joi.object({
  codigo: codigo.required(),
  descripcion: descripcion.required(),
});

const updateFamiliaSchema = joi.object({
  descripcion: descripcion.required(),
});

const getFamiliaSchema = joi.object({
  codigo: codigo.required(),
});

module.exports = { createFamiliaSchema, updateFamiliaSchema, getFamiliaSchema}
