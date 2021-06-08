// https://api.opendota.com/api/matches/271145478?api_key=75fe9567-b572-42ba-98d6-dc20a187f6ef

require('dotenv').config()
const express = require('express')
const layouts = require('express-ejs-layouts')
const app = express()
const PORT = process.env.PORT
app.set('view engine', 'ejs')

//middleware
app.use(layouts)
app.use(express.static(__dirname+'/public'))


// get '/' - show a form that lets the user search for a location
app.get('/', (req, res) => {
  // res.send('Dota heroes Coming soon.')
  res.render('home.ejs')
})



app.listen(PORT, () => console.log(`you have ${PORT} Gold to spend.`))