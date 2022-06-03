const router = require("express").Router()
const sequelize = require("../config/connection")
const { User } = require("../models")

router.get("/", (req, res) => {
    
})

router.get("/login", (req, res) => {})

router.get("/post/:id", (req, res) => {})

module.exports = router
