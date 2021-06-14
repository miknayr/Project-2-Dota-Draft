const fs = require('fs')

const db = require("../models");
const Team = db.team;
const Heroes = db.heroes;
const axios = require('axios'); 



exports.team_index = function (req, res) {
  // read the PC file
  console.log(teams)
  // send back the json
  res.render('views/team/index.ejs')

}

