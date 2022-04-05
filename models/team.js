'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Team.init({
    //TeamId: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Abbr: DataTypes.STRING,
    Logo: DataTypes.STRING,
    Division: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};