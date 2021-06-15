const fs = require('fs')
const express = require('express')
const router = express.Router()
const db = require("../models");

// const Team = db.team;
// const Heroes = db.heroes;
const axios = require('axios'); 



router.get('/', (req, res) => {
  res.send('👋 This is a test 👋')
// db.team.findAll({
  // req.query to find the "team"
  // where { }
// })
// .then(() => {
//   // res.render('team/index', {})
// }).catch(err => {console.log(err)})
});



router.post('/', (req, res) => {
  console.log("post request to /team")
  console.log("***", req.body)
  // console.log(req.body)
  // TODO: Get form data and add a new record to DB
  const selectedTeamComp = [];
  selectedTeamComp.push(req.body.heros0,req.body.heros1,req.body.heros2,req.body.heros3,req.body.heros4)
  console.log("selected team comp: " + selectedTeamComp)
    selectedTeamComp.forEach(hero => {
      console.log("selected team heroes 🌎: " + hero)
      db.team.findOrCreate({
        where: {
          team_name: req.body.teamName,
          hero_1:req.body.heros0,
          hero_2:req.body.heros1,
          hero_3:req.body.heros2,
          hero_4:req.body.heros3,
          hero_5:req.body.heros4
        }
      })
      .then(([name, created]) => {
        console.log(`We added ${req.body.teamName} to our roster!🐊🐊🐊🐊🐊🐊🐊🐊🐊`)
      }).catch(err => console.log(err))
    })
  res.redirect("/")
})

// router.put('/edit', (req,res) => {
//   db.team.update({
//     name: req.body.teamName // <-- current name, to be changed.
//   }, {
//     where: {
//       name: req.body.query // <--- update from the form??
//     }
//   })
//   .then(numRowsChanged=>{
//       // Returns a value of how many rows were altered by this update
//       console.log(numRowsChanged)
//       process.exit()
//   });
// });


// router.delete('/delete', (req, res) => {
//   db.team.destroy({
//     where: { name: req.body.delete }
//   })
//   .then(numRowsDeleted=>{
//       console.log(numRowsDeleted)
//     // do something when done deleting
//       process.exit()
//   });
// } )








module.exports = router