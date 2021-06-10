'use strict';
const axios = require('axios')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let dotaUrl = 'https://api.opendota.com/api/heroStats'
    const APIResponse = await axios.get(dotaUrl)
    const mappedResult = APIResponse.data.map(x => {
      return {
        hero_id: x.hero_id,
        localized_name: x.localized_name,
        pro_pick: x.pro_pick,
        pro_win: x.pro_win,
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('heroes', mappedResult)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('heroes', null)
  }
};
