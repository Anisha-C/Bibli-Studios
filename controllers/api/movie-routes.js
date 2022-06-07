const router = require("express").Router()
const { Movie } = require("../../models")

router.get("/", (req, res) => {
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
router.get("/:name", (req, res) => {
    Movie.findAll({
        attributes: ['name', 'year', 'genre'],
        where: {
            name : req.params.name
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

  router.get("/:year", (req, res) => {
    Movie.findAll({
        attributes: ['name', 'year', 'genre'],
        where: {
            year: req.params.year
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

  router.get("/:genre", (req, res) => {
    Movie.findAll({
        attributes: ['name', 'year', 'genre'],
        where: {
            genre: req.params.genre
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
