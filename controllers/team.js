const fs = require('fs')
const db = require("../models");
const Team = db.team;
const Heroes = db.heroes;

exports.create = (Team) => {
  return Team.create({
    name: Team.name,
    hero_id: Team.hero_id,
    img_url: Team.img_url
  })
    .then((Team) => {
      console.log(">> Created Team: " + JSON.stringify(Team, null, 4)); // <--- what does the 4 do?
      return Team;
    })
    .catch((err) => {
      console.log(">> Error while creating Team: ", err);
    });
};

exports.findAll = () => {
  return Team.findAll({
    include: [
      {
        model: Heroes,
        as: "Heroes",
        attributes: ["id", "name", "hero_id", "img_url"],
        through: {
          attributes: [],
        },
        // through: {
        //   attributes: ["Heroes_id", "Team_id"],
        // },
      },
    ],
  })
    .then((Team) => {
      return Team;
    })
    .catch((err) => {
      console.log(">> Error while retrieving Team: ", err);
    });
};

exports.findById = (id) => {
  return Team.findByPk(id, {
    include: [
      {
        model: Heroes,
        as: "Heroes",
        attributes: ["id", "name", "hero_id", "img_url"],
        through: {
          attributes: [],
        },
        // through: {
        //   attributes: ["Heroes_id", "Team_id"],
        // },
      },
    ],
  })
  .then((Team) => {
    return Team;
  })
  .catch((err) => {
    console.log(">> Error while retrieving Team: ", err);
  });
};
