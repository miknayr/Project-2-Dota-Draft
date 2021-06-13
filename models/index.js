'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// does this work??? https://bezkoder.com/sequelize-associate-many-to-many/
// db.team = require("./team.model.js")(sequelize, Sequelize);
// db.heroes = require("./heroes.model.js")(sequelize, Sequelize);
// db.heroes.belongsToMany(db.team, {
//   through: "team_heroes",
//   as: "teams",
//   foreignKey: "heroes_id",
// });
// db.team.belongsToMany(db.heroes, {
//   through: "team_tag",
//   as: "heroes",
//   foreignKey: "team_id",
// });

module.exports = db;
