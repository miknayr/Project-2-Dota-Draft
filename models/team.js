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
    hero_1: DataTypes.INTEGER,
    hero_2: DataTypes.INTEGER,
    hero_3: DataTypes.INTEGER,
    hero_4: DataTypes.INTEGER,
    hero_5: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'team',
  });
  return team;
};