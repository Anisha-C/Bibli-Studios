const router = require("express").Router()
const { User } = require("../../models")
const bcrypt = require("bcrypt")

router.get("/", (req, res) => {})

router.get("/:id", (req, res) => {
    User.findOne({
        attributes: { exclude: ["password"] },
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Movie,
            },
        ],
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: "No user with this ID found." })
                return
            }

            res.json(userData)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.post("/", (req, res) => {})

router.post("/login", (req, res) => {
    User.findOne({
        where: {
            username: req.body.userName,
        },
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: "No user with that username!" })
            return
        }

        const validPassword = dbUserData.checkPassword(req.body.password)

        if (!validPassword) {
            res.status(400).json({ message: "Incorrect password!" })
            return
        }

        res.json({ user: dbUserData, message: "You are now logged in!" })
    })
})

router.get("/logout", (req, res) => {
    req.session.destroy(function (err) {
        // cannot access session here
        res.redirect("/")
    })
})

router.post("/signup", (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    User.create({
        email: req.body.email,
        username: req.body.username,
        password: hash,
    }).then(function () {
        // we need to create the route for the redirect after the sign up.
        res.redirect("/")
    })
})

router.put("/:id", (req, res) => {})

router.delete("/:id", (req, res) => {})

module.exports = router
