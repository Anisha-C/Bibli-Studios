const router = require("express").Router()

const apiRoutes = require("./api")
const htmlRoutes = require("./html-routes")
//requires api router and html routes to pass to server
router.use("/", htmlRoutes)
router.use("/api", apiRoutes)

module.exports = router;
