const db = require("./models");
// const TeamController = require("./app/controllers/team.controller");
// const HeroesController = require("./app/controllers/heroes.controller");

// const run = async () => {

// };

// db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//   run();
// });
db.team.sync({ alter: true })