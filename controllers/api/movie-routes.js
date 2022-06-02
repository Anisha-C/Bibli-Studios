const router = require('express').Router();

router.post("/movies", (req, res) => {
    const movie = addNewMovie(req.body, movie);
    res.json(movie);
});

module.exports = router;