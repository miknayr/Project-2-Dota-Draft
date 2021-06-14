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
      models.team.hasMany(models.team)
    }
  };
  team.init({
    hero_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    img_url:DataTypes.STRING,
    hero_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'team',
  });
  return team;
};