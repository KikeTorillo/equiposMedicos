const { Model, DataTypes, Sequelize } = require('sequelize');

const TIPOS_PRODUCTO_TABLE = 'tiposproducto';

const TiposProductoSchema = {
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

class TiposProducto extends Model {
  static associate(){

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TIPOS_PRODUCTO_TABLE,
      modelName: 'TiposProducto',
      timestamps: false
    }
  }
}

module.exports = {TIPOS_PRODUCTO_TABLE, TiposProductoSchema, TiposProducto};
