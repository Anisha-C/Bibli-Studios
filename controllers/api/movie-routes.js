const router = require('express').Router();

router.get("/movies", (req, res) => {
    let results = books;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });

router.post("/movies", (req, res) => {
    const movie = addNewMovie(req.body, movie);
    res.json(movie);
});

module.exports = router;