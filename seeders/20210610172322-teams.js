'use strict';
const axios = require('axios')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    let dotaUrl = 'https://api.opendota.com/api/heroStats'
    let cdnUrl = 'http://cdn.dota2.com'
    const APIResponse = await axios.get(dotaUrl)
    const mappedResult = APIResponse.data.map(x => { // <--- this needs to change
      return {
        name: x.localized_name,
        hero_id: x.hero_id,
        img_url: cdnUrl+x.img,
        createdAt: new Date(),
        updatedAt: new Date()

      }
    })
    await queryInterface.bulkInsert('teams', mappedResult)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('teams', null)
  }
};
