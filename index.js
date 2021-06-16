
require('dotenv').config()
const express = require('express')
const layouts = require('express-ejs-layouts')
const axios = require('axios'); 
const app = express()
const PORT = process.env.PORT
const db = require('./models');
const rowdy = require('rowdy-logger')
const rowdyResults = rowdy.begin(app)
const fs = require('fs')
const methodOverride = require('method-override')


//middleware

app.set('view engine', 'ejs')
app.use(layouts)
app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({extended: false})); // <--- makes req.body useful for POST (cant do anythign without it)
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  let dotaUrl = 'https://api.opendota.com/api/heroStats';
  // Use request to call the API
  // axios.get(dotaUrl).then(apiResponse => {
  //   let dotaData = apiResponse.data;
  //   res.render('index', { dotaData: dotaData });
  // })

  axios.get(dotaUrl)
    .then(apiResponse => {
      db.user.findAll()
      .then((users) => {
        // console.log('*** /user teams data: ', users);
        
          res.render('index', { dotaData: apiResponse.data, users: users });
        })
    })
})

/////~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~
// HEROES
app.use('/heroes', require('./routes/heroes'))

/////~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~
// TEAMS

app.use('/teams', require('./routes/teams'));

// USERS

app.use('/users', require('./routes/users'));


app.listen(process.env.PORT, () => {
  rowdyResults.print()
  console.log(`you have ${PORT} Gold to spend.`)
})
