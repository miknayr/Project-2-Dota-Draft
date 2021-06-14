// https://api.opendota.com/api/matches/271145478?api_key=75fe9567-b572-42ba-98d6-dc20a187f6ef

require('dotenv').config()
const express = require('express')
const layouts = require('express-ejs-layouts')
const axios = require('axios'); 
const app = express()
const PORT = process.env.PORT
const db = ('./models');


//middleware
app.set('view engine', 'ejs')
app.use(layouts)
app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({extended: false})); // <--- makes req.body useful for POST (cant do anythign without it)

app.get('/', (req, res) => {
  let dotaUrl = 'https://api.opendota.com/api/heroStats';
  // Use request to call the API
  axios.get(dotaUrl).then(apiResponse => {
    let dotaData = apiResponse.data;
    res.render('index', { dotaData: dotaData });
  })
})

app.use('/teams', require('./routes/teams'));

app.get('/heroes/:id', (req, res) => {
  let dotaUrl = `https://api.opendota.com/api/heroStats/`;

  axios.get(dotaUrl)
  .then((apiResponse) => {
   let hero
    for(let x of apiResponse.data) {
      if (x.hero_id == req.params.id) {
        hero = x
      }
    }

    res.render('heroes/hero-stats', {dotaData: hero});
  })
  .catch(err => {console.log(err)})
})





// app.get('/teams/:team_id', (req, res) => {})
// app.get('/teams/compare', (req, res) => {})

// Imports all routes from the pokemon routes file


app.listen(PORT, () => console.log(`you have ${PORT} Gold to spend.`))