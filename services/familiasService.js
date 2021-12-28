const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');


class FamiliasService {

  constructor() {}

  async create(data) {
    const response = await models.Familias.create({ codigo: data.codigo, descrip: data.descripcion });
    return response;
  }

  async find() {
    const response = await models.Familias.findAll({ order: [['codigo', 'ASC']] });
    return response;
  }

  async findOne(codigo) {
    const familia = await models.Familias.findByPk(codigo);
    if (!familia) {
      throw boom.notFound('Familia no encontrada');
    } else {
      return familia;
    }
  }

  async update(codigo, changes) {
    const familia = await this.findOne(codigo);
    const response = await familia.update({ descrip: changes.descripcion });
    return response;

  }

  async delete(codigo) {
    const familia = await this.findOne(codigo);
    await familia.destroy();
    return ('se borro la familia con codigo '+codigo);
  }
}

module.exports = FamiliasService;
