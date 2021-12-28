const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');


class LineasNegocioService {

  constructor() {}

  async create(data) {
    const response = await models.LineasNegocio.create({ codigo: data.codigo, descrip: data.descripcion });
    return response;
  }

  async find() {
    const response = await models.LineasNegocio.findAll({ order: [['codigo', 'ASC']] });
    return response;
  }

  async findOne(codigo) {
    const lineaNegocio = await models.LineasNegocio.findByPk(codigo);
    if (!lineaNegocio) {
      throw boom.notFound('Linea de Negocio no encontrada');
    } else {
      return lineaNegocio;
    }
  }

  async update(codigo, changes) {
    const lineaNegocio = await this.findOne(codigo);
    const response = await lineaNegocio.update({ descrip: changes.descripcion });
    return response;

  }

  async delete(codigo) {
    const lineaNegocio = await this.findOne(codigo);
    await lineaNegocio.destroy();
    return ('se borro la linea de Negocio con codigo '+codigo);
  }
}

module.exports = LineasNegocioService;
