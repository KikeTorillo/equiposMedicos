const { Model, DataTypes, Sequelize } = require('sequelize');

const MODELOS_TABLE = 'modelos';

const ModelosSchema = {
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

class Modelos extends Model {
  static associate(){

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MODELOS_TABLE,
      modelName: 'Modelos',
      timestamps: false
    }
  }
}

module.exports = {MODELOS_TABLE, ModelosSchema, Modelos};
