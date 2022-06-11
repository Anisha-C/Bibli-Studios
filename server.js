//import necessary modules
const path = require("path")
const express = require("express")
const session = require("express-session")
const exphbs = require("express-handlebars")
require('dotenv').config();

//instance of express and heroku variables
const app = express()
const PORT = process.env.PORT || 3001
const secret = process.env.SECRET || 'secretsarecool'

//our sequelize session connected to DB. Connection of express and sequelize sessions
const sequelize = require("./config/connection")
const SequelizeStore = require("connect-session-sequelize")(session.Store)

//cookie set up
const sess = {
    secret: secret,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
}

//instruct express to use session w this cookie
app.use(session(sess))

//instance of express handlebars
const hbs = exphbs.create({})

//instruct express to use handlebars as the view engine
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

//boilerplate to use json, url encoding, and statically serve the public file
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

//imports the routers
app.use(require("./controllers/"))

//syncs sequelize to our database then starts the server listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"))
})
