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
  res.send('🙂 This is a test 🙂')
  // res.redirect('/')
})

router.put('/edit', (req,res) => {
  db.team.update({
    name: req.body.teamName // <-- current name, to be changed.
  }, {
    where: {
      name: req.body.query // <--- update from the form??
    }
  })
  .then(numRowsChanged=>{
      // Returns a value of how many rows were altered by this update
      console.log(numRowsChanged)
      process.exit()
  });
});


router.delete('/delete', (req, res) => {
  db.team.destroy({
    where: { name: req.body.delete }
  })
  .then(numRowsDeleted=>{
      console.log(numRowsDeleted)
    // do something when done deleting
      process.exit()
  });
} )








module.exports = router