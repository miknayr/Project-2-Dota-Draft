const fs = require('fs')
const db = require("../models");
const Team = db.team;
const Heroes = db.heroes;
//~~~~~~~~~ do i need?? below??

// exports.create = (heroes) => {
//   return Heroes.create({
//     name: heroes.localized_name, // <--- what is this supposed to be??
//   })
//     .then((heroes) => {
//       console.log(">> Created Heroes: " + JSON.stringify(heroes, null, 2));
//       return heroes;
//     })
//     .catch((err) => {
//       console.log(">> Error while creating Heroes: ", err);
//     });
// };

//~~~~~~~~~ do i need ?? above?

exports.findAll = () => {
  return Heroes.findAll({
    include: [
      {
        model: Team,
        as: "Teams",
        attributes: ["id", "name", "hero_id", "img_url"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then((Heroes) => { 
      return Heroes;
    })
    .catch((err) => {
      console.log(">> Error while retrieving Heroes: ", err);
    });
};

exports.findById = (id) => {
  return Heroes.findByPk(id, {
    include: [
      {
        model: Team,
        as: "Teams",
        attributes: ["id", "name", "hero_id", "img_url"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then((Heroes) => { 
      return Heroes;
    })
    .catch((err) => {
      console.log(">> Error while retrieving Heroes: ", err);
    });
};


exports.addTutorial = (HeroId, TeamId) => {
  return Heroes.findByPk(HeroId)
    .then((Heroes) => {
      if (!Heroes) {
        console.log("Hero not found!");
        return null;
      }
      return Team.findByPk(TeamId).then((Team) => {
        if (!Team) {
          console.log("Team not found!");
          return null;
        }

        Heroes.addTutorial(Team);
        console.log(`>> added Team id=${Team.id} to Tag id=${Hero.id}`);
        return tag;
      });
    })
    .catch((err) => {
      console.log(">> Error while adding Team to Hero: ", err);
    });
};