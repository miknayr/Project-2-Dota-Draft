'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      models.team.belongsTo(models.user)
    }
  };
  team.init({
    userId: DataTypes.INTEGER,
    team_name: DataTypes.STRING,
    hero_1: DataTypes.STRING,
    hero_2: DataTypes.STRING,
    hero_3: DataTypes.STRING,
    hero_4: DataTypes.STRING,
    hero_5: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'team',
  });
  return team;
};