'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class heroes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.heroes.belongsTo(models.team)
      
      
    }
  };
  heroes.init({
    hero_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    localized_name: DataTypes.STRING,
    pro_pick: DataTypes.INTEGER,
    pro_win: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'heroes',
  });
  return heroes;
};