const { Empresas, EmpresaSchema } = require('./empresasModel');

function setupModels(sequelize){
  Empresas.init(EmpresaSchema, Empresas.config(sequelize));
}

module.exports = {setupModels};
