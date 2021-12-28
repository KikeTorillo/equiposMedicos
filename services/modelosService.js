const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');


class ModelosService {

  constructor() {}

  async create(data) {
    const response = await models.Modelos.create({ codigo: data.codigo, descrip: data.descripcion });
    return response;
  }

  async find() {
    const response = await models.Modelos.findAll({ order: [['codigo', 'ASC']] });
    return response;
  }

  async findOne(codigo) {
    const modelo = await models.Modelos.findByPk(codigo);
    if (!modelo) {
      throw boom.notFound('Modelo no encontrado');
    } else {
      return modelo;
    }
  }

  async update(codigo, changes) {
    const modelo = await this.findOne(codigo);
    const response = await modelo.update({ descrip: changes.descripcion });
    return response;

  }

  async delete(codigo) {
    const modelo = await this.findOne(codigo);
    await modelo.destroy();
    return ('se borro el modelo con codigo '+codigo);
  }
}

module.exports = ModelosService;
