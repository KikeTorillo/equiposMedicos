const faker = require('faker');
const boom = require('@hapi/boom');

/*
este se usa cuando lo queramos hacer con sql por defecto y no con sequeliza
const pool = require('../libs/postgresPool'); */
//const pool = require('../libs/postgresPool');
//const pool = require('../libs/sequelize');
const { models } = require('../libs/sequelize');
const sequelize = require('../libs/sequelize');
const { required } = require('joi');



class EmpresasService {

  constructor() {
    /*
    Esto solo es necesario cuando se hara la conexion por pool y no por sequelize
    this.pool = pool;
    this.pool.on('error',(err) => console.error(err)); */
  }

  async create(data) {
    //const query = (`INSERT INTO empresas(codigo, descrip) VALUES ('${data.codigo}', '${data.descripcion}');`);
    //const response = await sequelize.query(query);
    const response = await models.Empresas.create({ codigo: data.codigo, descrip: data.descripcion });
    return response;
  }

  async find() {
    //const query = ('select * from empresas');
    //const [data,metadata] = await sequelize.query(query); //sequelize tambien permite ejecutar consultas de manera directa
    const response = await models.Empresas.findAll({ order: [['codigo', 'ASC']] });
    return response; //solo se usa en el pool de conexion normal cuando es por sequelize usa un arrray
  }

  async findOne(codigo) {
    const empresa = await models.Empresas.findByPk(codigo);
    if (!empresa) {
      throw boom.notFound('Empresa no encontrada');
    } else {
      return empresa;
    }
  }

  async update(codigo, changes) {
    const empresa = await this.findOne(codigo);
    const response = await empresa.update({ descrip: changes.descripcion });
    return response;

  }

  async delete(codigo) {
    const empresa = await this.findOne(codigo);
    await empresa.destroy();
    return ('se borro la empresa con codigo '+codigo);
  }
}

module.exports = EmpresasService;
