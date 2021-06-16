const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios');
const app = express()

// GET /team - return a page with saved comp
router.get('/', (req, res) => {
  // TODO: Get all records from the DB and render to view
  // res.send('👋 This is a test 👋')
  db.team.findAll({
    include: [db.user]
  })

  .then((teams) => {
    // console.log('*** /team teams data: ', teams);
    res.render('./teams/index', {teams: teams})
  })
  .catch(err => {
    console.log(err)
  })
})

// POST /team - receive the name of the team and add it to the database
router.post('/', (req, res) => {
  // console.log("post request to /team")
  console.log("*** /teams POST req.body: ", req.body)  
  db.team.findOrCreate({
    where: {
      team_name: req.body.teamName,
      hero_1: req.body.heros0,
      hero_2: req.body.heros1,
      hero_3: req.body.heros2,
      hero_4: req.body.heros3,
      hero_5: req.body.heros4,
      hero_1_img: req.body.heroImage0,
      hero_2_img: req.body.heroImage1,
      hero_3_img: req.body.heroImage2,
      hero_4_img: req.body.heroImage3,
      hero_5_img: req.body.heroImage4,
      userId: req.body.userId
    }
  })
  .then(([name, created]) => {
    console.log(`We added ${req.body.teamName} to our roster!🐊🐊🐊🐊🐊🐊🐊🐊🐊`)
  }).catch(err => console.log(err))
    
  res.redirect("/")
})

//GET ID of team ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
router.get('/edit/:id', (req, res) => {
  // TODO: Get all records from the DB and render to view
  // res.send('👋 This is a test 👋')
  db.team.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((team) => {
    res.render('teams/edit', { team: team })
  })
  .catch(err => {
    console.log(err)
  })
})


// EDIT/UPDATE ROUTE~~~~~~~~~
router.put('/edit/:id', (req,res) => {
  console.log('*** /teams/edit PUT !!!', req.body, req.body.teamName)
  db.team.update({
    team_name: req.body.teamName // <-- current name, to be changed.
  }, {
    where: {
      id: req.params.id // <--- update from the form??
    }
  })
  .then(() => {
    console.log('*** db.team.update successfull')
    res.redirect(`/teams/`)
  }); 
});


// DELETE ROUTE~~~~~~~~~~~~
router.delete('/delete/:id', (req, res) => {
  db.team.destroy({
    where: { id: req.params.id }
  })
  .then(numRowsDeleted => {
    console.log(numRowsDeleted)
    // do something when done deleting
    res.redirect('/teams')
  });
} )



module.exports = router;