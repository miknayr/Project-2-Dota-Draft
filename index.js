// https://api.opendota.com/api/matches/271145478?api_key=75fe9567-b572-42ba-98d6-dc20a187f6ef

require('dotenv').config()
const express = require('express')
const layouts = require('express-ejs-layouts')
const axios = require('axios'); 
const app = express()
const PORT = process.env.PORT
app.set('view engine', 'ejs')
const db = ('./models');


//middleware
app.use(layouts)
app.use(express.static(__dirname+'/public'))

// get '/' - show a form that lets the user search for a location
// app.get('/', (req, res) => {
//   // res.send('Dota heroes Coming soon.')
//   res.render('home.ejs')
// })
app.get('/', (req, res) => {
  let dotaUrl = 'https://api.opendota.com/api/heroStats';
  // Use request to call the API
  axios.get(dotaUrl).then(apiResponse => {
    let dotaData = apiResponse.data;
    res.render('index', { dotaData: dotaData });
  })
})

app.get('/:id', (req, res) => {
  let dotaUrl = `https://api.opendota.com/api/heroStats/`;

  axios.get(dotaUrl)
  .then((apiResponse) => {
   let hero
    for(let x of apiResponse.data) {
      if (x.hero_id == req.params.id) {
        hero = x
      }
    }

    // let hero = apiResponse.data.filter(x => { return x.hero_id == 10}) // <-- talk to kenny 
    // let trueId = (req.params.id-1)
    // if (req.params.id > 24){
    //   trueId -= 1
    // }
    // console.log(apiResponse.data[x].hero_id)
    // console.log(hero)
    res.render('heroes/hero-stats', {dotaData: hero});
  })
  .catch(err => {console.log(err)})
})


// app.get('/teams', (req, res) => {})
// app.get('/teams/:team_id', (req, res) => {})
// app.get('/teams/compare', (req, res) => {})

// const team = existingTeam || [];

// function add_hero(hero) {
//   // prevent team size from exceeding 5
//   if (team.length >= 5) {
//     // do nothing
//     return;
//   }

//   team.push(hero);
//   render();
// }



app.listen(PORT, () => console.log(`you have ${PORT} Gold to spend.`))