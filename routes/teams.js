const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios');
const app = express()

// GET /pokemon - return a page with favorited Pokemon
router.get('/teams/', (req, res) => {
  // TODO: Get all records from the DB and render to view
  db.team.findAll()
  .then((team) => {
    res.render('./team/index.ejs', { team: team})
  })
  .catch(err => {
    console.log(err)
  })
})


// // POST /teams - receive the name of team and add it to the database
// router.post('/', (req, res) => {
//   // TODO: Get form data and add a new record to DB
//   console.log(req.body) // <--- check this situation from changelog (this ) spits out 2nd hero choice
//   // for(let heros in req.body) {
//   //   console.log(heros)
//   // }
//   // console.log(req.params)
//   // console.log(req.query)
//   // console.log(req)
//   // var i;

//   // for (const key of Object.keys(req.body)) {
//   //   console.log(key, req.body[key]);
//   // }
//   // app.get('/', (req, res) => {
//   //   let dotaUrl = 'https://api.opendota.com/api/heroStats';
//   //   // Use request to call the API
//   //   axios.get(dotaUrl).then(apiResponse => {
//   //     let dotaData = apiResponse.data;
//   //     res.render('team/index.ejs', { dotaData: dotaData });
//   //   })
//   // })
// });

// below is the db create


// POST /teams - receive the name of the team and add it to the database
router.post('/', (req, res) => {

  // TODO: Get form data and add a new record to DB
  const selectedTeamComp = [];
  selectedTeamComp.push(req.body.heros0,req.body.heros1,req.body.heros2,req.body.heros3,req.body.heros4)
  // console.log("selected team comp: " + selectedTeamComp)
    selectedTeamComp.forEach(hero => {
      console.log("selected team heroes 🌎: " + hero)
      db.team.findOrCreate({
        where: {
          name: req.body.teamName,
          hero_name: hero
        }
      })
    .then(([name, created]) => {
      console.log(`We added ${req.body.teamName} to our roster!🐊🐊🐊🐊🐊🐊🐊🐊🐊`)
    }).catch(err => console.log(err))
  })
  res.redirect("/")
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