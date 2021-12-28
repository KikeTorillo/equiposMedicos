const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');


class MarcasService {

  constructor() {}

  async create(data) {
    const response = await models.Marcas.create({ codigo: data.codigo, descrip: data.descripcion });
    return response;
  }

  async find() {
    const response = await models.Marcas.findAll({ order: [['codigo', 'ASC']] });
    return response;
  }

  async findOne(codigo) {
    const marca = await models.Marcas.findByPk(codigo);
    if (!marca) {
      throw boom.notFound('Marca no encontrada');
    } else {
      return marca;
    }
  }

  async update(codigo, changes) {
    const marca = await this.findOne(codigo);
    const response = await marca.update({ descrip: changes.descripcion });
    return response;

  }

  async delete(codigo) {
    const marca = await this.findOne(codigo);
    await marca.destroy();
    return ('se borro la marca con codigo '+codigo);
  }
}

module.exports = MarcasService;
