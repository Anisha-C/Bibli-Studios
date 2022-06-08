const router = require("express").Router()
const { Movie, MovieUser } = require("../../models")
const checkLoggedIn = require('../../utils/checkLoggedIn');

// router.get("/", (req, res) => {
//     Movie.findAll()
//         .then(movieData => {
//             res.json(movieData)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json(err)
//         })
// })

// get results based on filter
router.get("/name", (req, res) => {
    Movie.findAll({
        attributes: ['name', 'year', 'genre'],
        where: {
            name : req.body.name
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

  router.get("/year/:year", (req, res) => {
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

  router.get("/genre/:genre", (req, res) => {
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

router.post("/", checkLoggedIn, (req, res) => {
    Movie.create(req.body)
    .then(movieData => {
        res.json(movieData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
});

router.put('/like', checkLoggedIn, (req, res) => {
  MovieUser.create({
    user_id: req.session.user_id,
    movie_id: req.body.movie_id
  })
  .then(movieData => res.json(movieData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

module.exports = router;
