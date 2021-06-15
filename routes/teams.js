const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios');
const app = express()

// GET /team - return a page with saved comp
router.get('/', (req, res) => {
  // TODO: Get all records from the DB and render to view
  // res.send('👋 This is a test 👋')
  db.team.findAll()
  .then((teams) => {
    // console.log('*** /team teams data: ', teams);
    res.render('./team/index', {teams: teams})
  })
  .catch(err => {
    console.log(err)
  })
})

// POST /team - receive the name of the team and add it to the database

router.post('/', (req, res) => {
  // console.log("post request to /team")
  console.log("***", req.body)  
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
    
  res.redirect("/")
})

router.get('/edit/:id', (req, res) => {
  // TODO: Get all records from the DB and render to view
  // res.send('👋 This is a test 👋')
  db.team.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((team) => {
    res.render('team/edit', { team: team })
  })
  .catch(err => {
    console.log(err)
  })
})

router.put('/edit/:id', (req,res) => {
  console.log('*** /team/edit PUT !!!', req.body, req.body.teamName)
  db.team.update({
    team_name: req.body.teamName // <-- current name, to be changed.
  }, {
    where: {
      id: req.params.id // <--- update from the form??
    }
  })
  .then(() => {
    console.log('*** db.team.update successfull')
    res.redirect(`/team/edit/${req.params.id}`)
  }); 
});

router.delete('/delete/:id', (req, res) => {
  db.team.destroy({
    where: { id: req.params.id }
  })
  .then(numRowsDeleted => {
    console.log(numRowsDeleted)
    // do something when done deleting
    res.redirect('/team')
  });
} )



module.exports = router;

