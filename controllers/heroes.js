const fs = require('fs')  // do i need?
const axios = require('axios'); 
const express = require('express')
const router = express.Router()


// exports.hero_show_get_id = function (req, res) {
//   let dotaUrl = `https://api.opendota.com/api/heroStats/`;
//   axios.get(dotaUrl)
//   .then((apiResponse) => {
//     let hero
//     for(let x of apiResponse.data) {
//       if (x.hero_id == req.params.id) {
//         hero = x
//       }
//     }
//     res.render('heroes/hero-stats', {dotaData: hero});
//   })
//   .catch(err => {console.log(err)})
// }

router.get('/:id', (req, res) => {
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
});

module.exports = router