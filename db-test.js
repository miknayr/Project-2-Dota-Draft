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

// this is to sync your db if u messed up
// db.team.sync({ alter: true })


// db.user.create({
//     user_name: 'pikachu',
//   }).then(user => {
//     console.log('Created: ', user.user_name)
//     db.user.findOne({
//       where: {
//         user_name: user.user_name
//       }
//     }).then(userFound => {
//       console.log('Found: ', userFound.user_name)
//     })
//   })

console.log(user.dataValues.user_name)