const joi = require('joi');

const codigo = joi.string().alphanum();
const descripcion = joi.string();

const createEmpresaSchema = joi.object({
  codigo: codigo.required(),
  descripcion: descripcion.required(),
});

const updateEmpresaSchema = joi.object({
  descripcion: descripcion.required(),
});

const getEmpresaSchema = joi.object({
  codigo: codigo.required(),
});

module.exports = { createEmpresaSchema, updateEmpresaSchema, getEmpresaSchema}
