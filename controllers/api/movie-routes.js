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

// get results based on filter
router.get("/movies/name", (req, res) => {
    Movie.findAll({
        attributes: ['name', 'year', 'genre'],
        where: {
            name : req.query.name
        }
    })
    .then(movieData => {
      res.json(movieData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });

  router.get("/movies/year", (req, res) => {
    Movie.findAll({
        attributes: ['name', 'year', 'genre'],
        where: {
            year: req.query.year
        }
    })
    .then(movieData => {
      res.json(movieData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });

  router.get("/movies/genre", (req, res) => {
    Movie.findAll({
        attributes: ['name', 'year', 'genre'],
        where: {
            genre: req.query.genre
        }
    })
    .then(movieData => {
      res.json(movieData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });

router.post("/movies", (req, res) => {
    Movie.create(req.body)
    .then(movieData => {
        res.json(movieData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
});

module.exports = router
