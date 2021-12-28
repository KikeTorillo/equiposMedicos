const { Empresas, EmpresaSchema } = require('./empresasModel');
const { Familias, FamiliasSchema} = require('./familiasModel');
const { LineasNegocio, LineasNegocioSchema} = require('./lineasNegocioModel');
const { Marcas, MarcasSchema} = require('./marcasModel');
const { Modelos, ModelosSchema} = require('./modelosModel');
const { TiposProducto, TiposProductoSchema } = require('./tiposProductoModel');

function setupModels(sequelize){
  Empresas.init(EmpresaSchema, Empresas.config(sequelize));
  Familias.init(FamiliasSchema, Familias.config(sequelize));
  LineasNegocio.init(LineasNegocioSchema, LineasNegocio.config(sequelize));
  Marcas.init(MarcasSchema, Marcas.config(sequelize));
  Modelos.init(ModelosSchema, Modelos.config(sequelize));
  TiposProducto.init(TiposProductoSchema, TiposProducto.config(sequelize));
}

module.exports = {setupModels};
