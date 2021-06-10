const db = require('./models')
db.team.sync({
  alter:true
})