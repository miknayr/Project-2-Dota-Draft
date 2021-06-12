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
  console.log(req.body.teamName)
  // console.log(req.params)
  // console.log(req.query)
  // console.log(req)
  res.send('success 👌👌👌👌👌👌👌👌👌')
    // 
});






module.exports = router;



// POST /pokemon - receive the name of a pokemon and add it to the database
// router.post('/', (req, res) => {
//   // TODO: Get form data and add a new record to DB
//   db.teams.create({

//       name: req.body.teamName,// ryan
//       hero1: req.body.h
//       hero2: req.body.e
//       hero3: req.body.r
//       hero4: req.body.o
//       hero5: req.body.s
//   })
//   .then(()=>{
//     res.redirect('/pokemon')
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