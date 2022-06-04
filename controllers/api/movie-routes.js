const router = require("express").Router()
const { Movie } = require("../../models")

router.get("/movies", (req, res) => {
    Movie.findAll()
        .then(movieData => {
            res.json(movieData)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.post("/movies", (req, res) => {
    const movie = addNewMovie(req.body, movie)
    res.json(movie)
})

module.exports = router
