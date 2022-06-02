const router = require('express').Router();

router.post("/books", (req, res) => {
    const book = addNewBook(req.body, book);
    res.json(book);
});

module.exports = router;