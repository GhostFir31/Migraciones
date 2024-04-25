'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activo.belongsTo(models.Ubicacion, { foreignKey: 'ubicacionId' });
      Activo.belongsTo(models.Responsable, { foreignKey: 'responsableId' });
    }
  }
  Activo.init({
    idActivo: DataTypes.STRING,
    numSerie: DataTypes.STRING,
    numInventario: DataTypes.STRING,
    tipoActivo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    imagenActivo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Activo',
  });
  return Activo;
};