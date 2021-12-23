const { Model, DataTypes, Sequelize } = require('sequelize');

const EMPRESAS_TABLE = 'empresas';

const EmpresaSchema = {
  codigo: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.STRING
  },
  descrip: {
    allowNull: true,
    type: DataTypes.STRING
  }
}

class Empresas extends Model {
  static associate(){

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: EMPRESAS_TABLE,
      modelName: 'Empresas',
      timestamps: false
    }
  }
}

module.exports = {EMPRESAS_TABLE, EmpresaSchema, Empresas};

