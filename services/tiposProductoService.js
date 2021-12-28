const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');


class TiposProductoService {

  constructor() {}

  async create(data) {
    const response = await models.TiposProducto.create({ codigo: data.codigo, descrip: data.descripcion });
    return response;
  }

  async find() {
    const response = await models.TiposProducto.findAll({ order: [['codigo', 'ASC']] });
    return response;
  }

  async findOne(codigo) {
    const tipoProducto = await models.TiposProducto.findByPk(codigo);
    if (!tipoProducto) {
      throw boom.notFound('Tipo de Producto no encontrado');
    } else {
      return tipoProducto;
    }
  }

  async update(codigo, changes) {
    const tipoProducto = await this.findOne(codigo);
    const response = await tipoProducto.update({ descrip: changes.descripcion });
    return response;

  }

  async delete(codigo) {
    const tipoProducto = await this.findOne(codigo);
    await tipoProducto.destroy();
    return ('se borro el tipo de producto con codigo '+codigo);
  }
}

module.exports = TiposProductoService;
