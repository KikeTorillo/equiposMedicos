const { Model, DataTypes, Sequelize } = require('sequelize');

const LINEAS_NEGOCIO_TABLE = 'lineasnegocio';

const LineasNegocioSchema = {
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

class LineasNegocio extends Model {
  static associate(){

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: LINEAS_NEGOCIO_TABLE,
      modelName: 'LineasNegocio',
      timestamps: false
    }
  }
}

module.exports = {LINEAS_NEGOCIO_TABLE, LineasNegocioSchema, LineasNegocio};
