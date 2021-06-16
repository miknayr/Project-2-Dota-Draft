# Project-2-Dota-Draft


to install; 
in terminal:
- createdb dota2
- sequelize model:create --name user --attributes user_name:STRING
- sequelize model:create --name team --attributes userId:INTEGER,team_name:STRING,hero_1:STRING,hero_2:STRING,hero_3:STRING,hero_4:STRING,hero_5:STRING,hero_1_img:STRING,hero_2_img:STRING,hero_3_img:STRING,hero_4_img:STRING,hero_5_img:STRING

go to vscode
- check your model associations
for teams
  -models.team.belongsTo(models.user) 
  and 
for user
  - models.user.hasMany(models.team)
- update your configs

go back to terminal
- sequelize db:migrate

go to terminal
- psql
- check database
- connect to dota2 database
- check with select * from (tables)



how to use:

- select your heroes to save your composition.
- to remove/edit the composition, click on the icon within the row you want to remove.

- If you would like to refer back to the composition youve made, go to the users page and create a user name.
- Once you found your composition, name it and save it to a user.
- To review, check "List of Saved Teams by Users" to check the top compositions made by the best players around the world.

If you want to check specific hero stats, use /heroes/(#heroID) and you can learn more!


