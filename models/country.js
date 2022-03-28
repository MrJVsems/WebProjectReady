'use strict';
const {
  Model
} = require('sequelize');
const {Sequelize} = require("sequelize/types");
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Country.init({
    CountryCode: {
      type: DataTypes.CHAR,
      primaryKey: true,
    },
    CountryName: DataTypes.CHAR,
    CountryTest: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};