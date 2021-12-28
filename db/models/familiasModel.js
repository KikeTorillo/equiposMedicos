const { Model, DataTypes, Sequelize } = require('sequelize');

const FAMILIAS_TABLE = 'familias';

const FamiliasSchema = {
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

class Familias extends Model {
  static associate(){

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FAMILIAS_TABLE,
      modelName: 'Familias',
      timestamps: false
    }
  }
}

module.exports = {FAMILIAS_TABLE, FamiliasSchema, Familias};
