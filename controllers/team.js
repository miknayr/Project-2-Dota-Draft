const fs = require('fs')
const express = require('express')
const router = express.Router()
const db = require("../models");

// const Team = db.team;
// const Heroes = db.heroes;
const axios = require('axios'); 



// exports.team_index = function (req, res) {
//   db.team.findAll()
//   .then((team) => {
//     res.render('team/index', { team: name })
//   })
//   .catch((error) => {
//     res.status(error).render(error)
//  }


 router.get('/team', (req, res) => {
  //  res.send('👋 This is a test 👋')
  db.team.findAll()
  .then(() => {
  }).catch(err => {console.log(err)})
});

router.post('/team', (req, res) => {
  // res.send('🙂 This is a test 🙂')
  res.redirect('/')


    // TODO: Get form data and add a new record to DB
    // const selectedTeamComp = [];
    // selectedTeamComp.push(req.body.heros0,req.body.heros1,req.body.heros2,req.body.heros3,req.body.heros4)
    // // console.log("selected team comp: " + selectedTeamComp)
    //   selectedTeamComp.forEach(hero => {
    //     console.log("selected team heroes 🌎: " + hero)
    //     db.team.findOrCreate({
    //       where: {
    //         name: req.body.teamName,
    //         hero_name: hero
    //       }
    //     })
    //   .then(([name, created]) => {
    //     console.log(`We added ${req.body.teamName} to our roster!🐊🐊🐊🐊🐊🐊🐊🐊🐊`)
    //   })
    //   .catch(err => console.log(err))


})

module.exports = router