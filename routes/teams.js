const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios');
const app = express()

// GET /teams - return a page with saved comp
router.get('/', (req, res) => {
  // TODO: Get all records from the DB and render to view
  db.team.findAll()
  .then((name) => {
    res.redirect('./team/index', { name: name})
  })
  .catch(err => {
    console.log(err)
  })
})

// POST /teams - receive the name of the team and add it to the database
router.post('/', (req, res) => {
  console.log('this is the best test')
  // console.log("post request to /team")
  // // TODO: Get form data and add a new record to DB
  // const selectedTeamComp = [];
  // selectedTeamComp.push(req.body.heros0,req.body.heros1,req.body.heros2,req.body.heros3,req.body.heros4)
  // // console.log("selected team comp: " + selectedTeamComp)
  //   selectedTeamComp.forEach(hero => {
  //     // console.log("selected team heroes 🌎: " + hero)
  //     db.team.findOrCreate({
  //       where: {
  //         name: req.body.teamName,
  //         hero_1:req.body.heros0,
  //         hero_2:req.body.heros1,
  //         hero_3:req.body.heros2,
  //         hero_4:req.body.heros3,
  //         hero_5:req.body.heros4
  //       }
  //     })
  //     .then(([name, created]) => {
  //       console.log(`We added ${req.body.teamName} to our roster!🐊🐊🐊🐊🐊🐊🐊🐊🐊`)
  //     }).catch(err => console.log(err))
  //   })
  // res.redirect("/")
});

module.exports = router;

// team = await db.team.create({ name: req.body.name })
// heroes = await db.heroes.findAll({ 
//   req.body.hero1, // <--- this has to be some dynamic on click situation that pulls the data in
  
//   /* get the 5 heroes from the db */ })
// heroes.forEach(x => team.addHero(x))

// db.team.findOne({
//   where: { name: 'ryan' },
//   include: db.heroes
// }).then(response => {console.log(response)}



// db.heroes.findAll{ // use req.body.hero1, req.body.hero2, etc. to find the heroes from the db}

// // https://bezkoder.com/sequelize-associate-many-to-many/ 
// const teams = sequelize.define("teams", { ... })
// const heroes = sequelize.define("heroes", { ... })


// const req.body.teamName = await db.heroes.findOne({  //<--- not sure how to get teamName this from the console.log(req.body) 
//     where: {
//       name: heros[i]
//     } 
// })