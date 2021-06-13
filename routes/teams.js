const express = require('express');
const router = express.Router();
const db =require('../models');
const axios = require('axios');

// // GET /pokemon - return a page with favorited Pokemon
// router.get('/teams/', (req, res) => {
//   // TODO: Get all records from the DB and render to view
//   db.team.findAll()
//   .then((team) => {
//     res.render('./team/index.ejs', { team: team})
//   })
//   .catch(err => {
//     console.log(err)
//   })
// })


// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', (req, res) => {
  // TODO: Get form data and add a new record to DB
  console.log(req.body) // <--- check this situation from changelog (this )
  // console.log(req.params)
  // console.log(req.query)
  // console.log(req)
  res.send('success 👌👌👌👌👌👌👌👌👌')
  var i;
  for (i = 0; i < 5; i++) {
    console.log(req.body.data.heros)
  }

    // 
});

module.exports = router;

// below is the db create


// POST /teams - receive the name of the team and add it to the database
// router.post('/', (req, res) => {
//   // TODO: Get form data and add a new record to DB
//   db.teams.create({

//       name: req.body.teamName,// ryan
//       hero1: req.body.heros0
//       hero2: req.body.heros1
//       hero3: req.body.heros2
//       hero4: req.body.heros3
//       hero5: req.body.heros4
//   })
//   .then(()=>{
//     res.redirect('/teams')
//   })
//   .catch( error => console.log(error))
// });


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