
require('dotenv').config()
const express = require('express')
const layouts = require('express-ejs-layouts')
const axios = require('axios'); 
const app = express()
const PORT = process.env.PORT
const db = ('./models');
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
  axios.get(dotaUrl).then(apiResponse => {
    let dotaData = apiResponse.data;
    res.render('index', { dotaData: dotaData });
  })
})

/////~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~

const heroController = require('./controllers/heroes');

// GET /heroes/:id -- READ one specific hero~~~~~~~~~~
app.get('/heroes/:id', heroController.hero_show_get_id)


/////~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~//~~~~~~~~
const teamsController = require('./controllers/team')

// // GET /prehistoric-creatures -- READ all pcs ~~~~~~~~~
app.get('/teams', teamsController.team_index)
app.use('/teams', require('./routes/teams'));




// app.get('/teams/:team_id', (req, res) => {})
// app.get('/teams/compare', (req, res) => {})

// Imports all routes from the pokemon routes file


app.listen(PORT, () => {
  rowdyResults.print()
  console.log(`you have ${PORT} Gold to spend.`)
})
