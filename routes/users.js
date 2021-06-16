const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios');
const app = express()

// GET /team - return a page with saved comp
router.get('/', (req, res) => {
  // TODO: Get all records from the DB and render to view
  // res.send('👋 This is a test 👋')
  db.user.findAll({
    include: [db.team]
  })
  .then((users) => {
    console.log('*** /user teams data: ', users);
    res.render('./users/index', {users: users})
  })
  .catch(err => {
    console.log(err)
  })
})

// POST /team - receive the name of the team and add it to the database
router.post('/', (req, res) => {
  // console.log("post request to /team")
  console.log("*** /team POST req.body: ", req.body)  
  db.user.create({
    user_name: req.body.userName 
  }).then(user => {
    console.log('🐊🐊🐊🐊🐊🐊🐊🐊 Created: ', user.user_name )
    db.user.findOne({
      where: {
        user_name: user.user_name
      }
    }).then(userFound => {
      console.log('Found: ', userFound.user_name)
    })
  }).catch(err => console.log(err))
    
  res.redirect("/users")
})


//GET ID of team ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
router.get('/edit/:id', (req, res) => {
  // TODO: Get all records from the DB and render to view
  // res.send('👋 This is a test 👋')
  db.user.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((users) => {
    res.render('users/edit', { users: users })
  })
  .catch(err => {
    console.log(err)
  })
})


// EDIT/UPDATE ROUTE~~~~~~~~~
router.put('/edit/:id', (req,res) => {
  // console.log('*** /team/edit PUT !!!', req.body, req.body.teamName)
  db.user.update({
    user_name: req.body.userName // <-- current name, to be changed.
  }, {
    where: {
      id: req.params.id // <--- update from the form??
    }
  })
  .then(() => {
    console.log('*** db.team.update successfull')
    res.redirect(`/users/`)
  }); 
});


// DELETE ROUTE~~~~~~~~~~~~
router.delete('/delete/:id', (req, res) => {
  db.user.destroy({
    where: { id: req.params.id }
  })
  .then(numRowsDeleted => {
    console.log(numRowsDeleted)
    // do something when done deleting
    res.redirect('/users')
  });
} )



module.exports = router;

