const router = require("express").Router()
const { Movie, MovieUser } = require("../../models")
const checkLoggedIn = require('../../utils/checkLoggedIn');
const movier = require('movier');

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
router.get("/name", (req, res) => {
    Movie.findAll({
        attributes: ['name', 'year', 'link'],
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

  router.get("/year", (req, res) => {
    Movie.findAll({
        attributes: ['name', 'year', 'link'],
        where: {
            year: req.body.year
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

  router.get("/genre", (req, res) => {
    Movie.findAll({
        attributes: ['name', 'year', 'link'],
        where: {
            genre: req.body.genre
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

router.post("/", (req, res) => {
      movier.searchTitleByName(req.body.name)
      .then(searchedMovie => {
        const name = searchedMovie[0].name;
        const year = searchedMovie[0].titleYear;
        const link = searchedMovie[0].url;
        Movie.create({
          name: name,
          year: year,
          link: link
        })
        .then(movieData => {
          res.json(movieData);
        })
       })
       .catch(err => {
         console.log(err);
         res.status(500).json(err);
       })
       .catch(err => {
         console.log(err);
         res.status(500).json(err);
       });
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
