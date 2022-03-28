'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Player.init({
    PlayerId: DataTypes.INTEGER,
    LastName: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    Gender: DataTypes.CHAR,
    Height: DataTypes.CHAR,
    Weight: DataTypes.CHAR,
    ShirtNumber: DataTypes.STRING,
    Email: DataTypes.STRING,
    CountryCode: DataTypes.CHAR,
    TeamId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};