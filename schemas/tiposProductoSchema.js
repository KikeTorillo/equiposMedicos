const joi = require('joi');

const codigo = joi.string().alphanum();
const descripcion = joi.string();

const createTiposProductochema = joi.object({
  codigo: codigo.required(),
  descripcion: descripcion.required(),
});

const updateTiposProductoSchema = joi.object({
  descripcion: descripcion.required(),
});

const getTiposProductoSchema = joi.object({
  codigo: codigo.required(),
});

module.exports = { createTiposProductochema, updateTiposProductoSchema, getTiposProductoSchema}
