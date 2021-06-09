// https://api.opendota.com/api/matches/271145478?api_key=75fe9567-b572-42ba-98d6-dc20a187f6ef

require('dotenv').config()
const express = require('express')
const layouts = require('express-ejs-layouts')
const axios = require('axios'); 
const app = express()
const PORT = process.env.PORT
app.set('view engine', 'ejs')

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
    let trueId = (req.params.id-1)
    if (req.params.id > 24){
      trueId -= 1
    }
    console.log(req.params.id)
    res.render('heroes/hero-stats', {dotaData: apiResponse.data[trueId]});
  })
  .catch(err => {console.log(err)})
})

// app.get('/heroes/:id', (req, res) => {
//   axios.get(`http://www.omdbapi.com/?apikey=${omdbApiKey}&i=${req.params.id}`)
//       .then((response) => {
//         console.log(req.params.id)
//         res.render('detail', {details: response.data});
//       })
//       .catch(err => {console.log(err)})
// });



// app.get('/heroes/:hero_id', (req, res) => {
//   axios.get(https://api.opendota.com/api/heroes)
//   .then((response) => {
//     console.log(req.params.id)
//     res.render('detail', {details: response.data});
//   })
//   .catch(err => {console.log(err)})
// })

// app.get('/teams', (req, res) => {})
// app.get('/teams/:team_id', (req, res) => {})
// app.get('/teams/compare', (req, res) => {})



app.listen(PORT, () => console.log(`you have ${PORT} Gold to spend.`))