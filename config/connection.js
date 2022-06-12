const Sequelize = require("sequelize")
//sets up dotenv to use descrete variables
require("dotenv").config()
//sets instance of sequlize to heroku/jawsdb in heroku environment or to local DB when used locally
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PSWRD, {
          host: "localhost",
          dialect: "mysql",
          port: 3306,
      })

module.exports = sequelize
