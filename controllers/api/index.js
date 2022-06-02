const router = require('express').Router();
const userRoutes = require('./user.routes');
const movieRoutes = require('./movie-routes');
const bookRoutes = require('./book-routes')


router.use('/users', userRoutes);
router.use(movieRoutes);
router.use(bookRoutes);


module.exports = router;
