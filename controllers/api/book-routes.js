const router = require("express").Router()

router.get("/books", (req, res) => {
    let results = books
    if (req.query) {
        results = filterByQuery(req.query, results)
    }
    res.json(results)
})

router.post("/books", (req, res) => {
    const book = addNewBook(req.body, book)
    res.json(book)
})

module.exports = router
